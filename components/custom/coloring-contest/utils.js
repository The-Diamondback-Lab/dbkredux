import axios from 'axios'

/**
 * @typedef Finalist
 * @prop {string} coloring_contest_finalist_name
 * @prop {number | object} coloring_contest_finalist_thumbnail_image
 * @prop {string} coloring_contest_finalist_submission_link
 */

/**
 * @typedef FinalistMin A minimized finalist object, the contains the name and thumbnail link
 * @prop {string} name
 * @prop {string} thumbnailLink
 * @prop {string} submissionLink
 */

const WP_URL = `${process.env.WP_URL}/wp-json/wp/v2`

export async function fetchContestData() {
  let pageObjects = await axios.get(`${WP_URL}/pages?slug=coloring-contest`)

  if (pageObjects.data.length === 0) {
    throw new Error('Could not find coloring contest page')
  }

  let ccPage = pageObjects.data[0]
  /**
   * @type {string}
   */
  let rawHtml = ccPage.content.rendered
  let acf = ccPage.acf
  // Gathering custom fields (finalists and google form link)
  /**
   * @type {Finalist[]}
   */
  let finalistObjs = Object.keys(acf)
    .filter(s => /^coloring_contest_finalist_\d+$/.test(s))
    .map(k => acf[k])

  let gForm = acf.coloring_contest_gform
  /**
   * @type {string}
   */
  let gFormLink = gForm.coloring_contest_gform_link

  // If a finalist preparation task fails, then the task resolves to an error object
  let finalists = await Promise.all(finalistObjs.map(f => prepareFinalist(f)))

  return {
    rawHtml,
    finalists,
    gForm: {
      link: gFormLink,
      height: gForm.coloring_contest_gform_height
    }
  }
}

/**
 * Parses out the finalists thumbnail image link
 * @param {Finalist} finalist
 * @returns {Promise<FinalistMin>} a minimized finalist object
 */
async function prepareFinalist(finalist) {
  try {
    let {
      coloring_contest_finalist_name: name,
      coloring_contest_finalist_thumbnail_image: thumb,
      coloring_contest_finalist_submission_link: submissionLink
    } = finalist

    let thumbnailLink = null

    if (thumb instanceof Number || typeof thumb === 'number') {
      thumbnailLink = await fetchThumbnailById(thumb)
    } else {
      thumbnailLink = await fetchThumbnailById(thumb.id || thumb.ID)
    }

    return {
      name,
      thumbnailLink,
      submissionLink
    }
  } catch (e) {
    console.error(e)
    return e
  }
}

/**
 * Fetches the link to a thumbnail/media object via it's ID.
 *
 * @param {number} mediaId WordPress media object ID
 * @returns {string}
 */
async function fetchThumbnailById(mediaId) {
  if (mediaId == null) return null

  let wpMediaItem = (await axios.get(`${WP_URL}/media/${mediaId}`)).data

  // Link is retrieved from one of these objects/properties (in this priority):
  // 1. media_details.sizes
  // 2. source_url
  // 3. guid.rendered
  if (wpMediaItem.media_details != null &&
    wpMediaItem.media_details.sizes != null &&
    objectHasProperties(wpMediaItem.media_details.sizes)) {
    // Sort different sizes by width
    let sizes = wpMediaItem.media_details.sizes
    let keys = Object.keys(sizes).sort((a, b) => sizes[a].width - sizes[b].width)
    // Takes the 3rd element, or the next smallest (i.e. 2nd or 1st)
    let thirdSmallestInd = Math.min(2, keys.length - 1)
    let sizeKey = keys[thirdSmallestInd]
    return sizes[sizeKey].source_url
  } else if (wpMediaItem.source_url != null) {
    return wpMediaItem.source_url
  } else if (wpMediaItem.guid != null && wpMediaItem.guid.rendered != null) {
    return wpMediaItem.guid.rendered
  } else {
    return null
  }
}

/**
 * Checks if an object has any properties
 * @param {object} o
 * @returns {boolean}
 */
function objectHasProperties(o) {
  for (var p in o) {
    if (o.hasOwnProperty(p)) {
      return true
    }
  }
  return false
}
