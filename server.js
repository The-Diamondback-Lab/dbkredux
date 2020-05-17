const fs = require('fs').promises
const express = require('express')
const next = require('next')
const routes = require('./routes')
const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = routes.getRequestHandler(app)

const { handleRuntimeRedirects, updateRuntimeRedirects } = require('./utilities/dynamic-redirect')

app.prepare()
  .then(() => {
    const server = express()
    const adsTxtPromise = fs.readFile('./ads.txt', { encoding: 'utf-8' })

    // Middleware to redirect a request if it's path is found in a redirection table (this table
    // can be updated during runtime)
    server.use(handleRuntimeRedirects)

    server.get('/refresh-redirects', (req, res) => {
      // TODO Add some sort of authentication for these requests
      // Possibly make sure value of Authorization header matches something this server accepts
      // (If we do this, make sure there is exactly one such value)
      updateRuntimeRedirects(req, res)
    })

    server.get('/ads.txt', (_, res) => {
      adsTxtPromise
        .then(data => res.send(data))
        .catch(_ => res.status(500).send('Unexpected error reading ads.txt'))
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  }).catch((exception) => {
    console.error(exception.stack)
    process.exit(1)
  })
