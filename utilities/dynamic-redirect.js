const Validator = require('jsonschema').Validator
const fs = require('fs').promises
const axios = require('axios').default

const ValidationError = require('./ValidationError')

const jsonValidator = new Validator()

/**
 * Maps a route to a remote URL for redirection
 * @type {Object.<string,string>}
 */
const redirectTable = {}

/**
 * Redirects the request to a redirection route added during runtime if and only if the exact
 * request path matches an entry in the runtime redirection table.
 *
 * @param {Express.Request} req An Express request object
 * @param {Express.Response} res An Express response object
 * @param {function} nextStep A callback to execute the next step in the Express routing stack
 */
function handleRuntimeRedirects(req, res, nextStep) {
  if (redirectTable[req.path] != null) {
    let url = redirectTable[req.path]
    res.redirect(url)
  } else {
    nextStep()
  }
}

// Before using our redirect schema, first validate it to make sure it's a valid schema
const redirectSchemaPromise = (async () => {
  try {
    let jsonSchema = await axios.get('http://json-schema.org/draft-07/schema')
    let redirectSchema = await fs.readFile('./schemas/redirects-schema.json', { encoding: 'utf8' })

    jsonValidator.validate(redirectSchema, jsonSchema, {
      throwError: true,
      nestedErrors: true
    })

    return JSON.parse(redirectSchema)
  } catch (e) {
    console.error(e)
    return null
  }
})()

const REDIRECT_JSON_INPUT_PATH = './utilities/redirects.json'

/**
 * Updates runtime redirection routes to an Express application during runtime based on the most
 * recent redirect routes
 *
 * @param {Express.Request} req An Express Request object
 * @param {Express.Response} res An Express Response object
 */
async function updateRuntimeRedirects(req, res) {
  /**
   * @type
   */
  let redirectSchema = await redirectSchemaPromise

  if (redirectSchema == null) {
    res.status(500).send('Redirect JSON schema was invalid; looks like a job for git-blame')
    return
  }

  /**
   * @type {Object.<string, RedirectRoute>}
   */
  let redirectRoutes = null
  try {
    redirectRoutes = await getRedirectJson()
  } catch (error) {
    res.status(500).send(error)
  }

  try {
    validateRedirectJson(redirectRoutes, redirectSchema)
  } catch (validationError) {
    res.status(400).send(validationError)
    return
  }

  // TODO Find a way to store previous set of dynamically redirected routes

  // Loop over redirect obj's properties and add the routes
  // Skip the $schema property if it exists
  try {
    let routeNames = Object.keys(redirectRoutes).filter(x => x !== '$schema')
    for (let i = 0; i < routeNames.length; i++) {
      let routeName = routeNames[i]

      let routeInfo = redirectRoutes[routeName]

      if (routeInfo.type === 'url') {
        validateRemoteUrl(routeInfo.path)
        redirectTable[routeName] = routeInfo.path
      } else {
        throw new ValidationError(`Invalid route type ${routeInfo.type}`, 400)
      }
    }

    // TODO delete any old routes if query parameter "delete_old_routes" is present
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(e.statusCode).send(e.message)
    } else {
      // Unexpected error
      res.status(500).send(e.message)
    }
  }

  res.status(200).end()
}

/**
 * Gets the redirect JSON file from a local resource object
 */
async function getRedirectJson() {
  let contents = await fs.readFile(REDIRECT_JSON_INPUT_PATH, { encoding: 'utf8' })
  return JSON.parse(contents)
}

/**
 * Validates the redirect JSON object against a given schema
 *
 * @param {object} redirectObj Object to validate
 * @param {object} schema Schema used for validation
 */
function validateRedirectJson(redirectObj, schema) {
  jsonValidator.validate(redirectObj, schema, {
    throwError: true,
    nestedErrors: true
  })
}

/**
 * Makes an Express endpoint that redirects to the given URL
 * @param {string} url
 * @return {(req:Express.Request, res:Express.Response) => void}
 * @throws {ValidationError} if the url is malformed or does not use the HTTP or HTTPS protocols
 */
function validateRemoteUrl(url) {
  let urlObj = null
  try {
    urlObj = new URL(url)
  } catch (e) {
    throw new ValidationError(`Malformed URL ${url}`, 400)
  }

  if (!urlObj.protocol.toLowerCase().startsWith('http') &&
      !urlObj.protocol.toLowerCase().startsWith('https')) {
    throw new ValidationError(`Invalid protocol ${urlObj.protocol}, can only be HTTP or HTTPS`, 400)
  }
}

module.exports = {
  handleRuntimeRedirects,
  updateRuntimeRedirects
}

/**
 * @typedef RedirectRoute
 * @prop {('file'|'uri')} type The type of resource the route redirects to
 * @prop {string} path Path to the resource
 */
