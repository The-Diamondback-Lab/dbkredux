/* eslint-disable react/jsx-closing-bracket-location */
import * as React from 'react'

import ColoringContestFinalist from './ColoringContestFinalist'
import * as utils from './utils'

const MAX_ITEMS = 3

/**
 * Main container for the coloring contest page. Constructs rows of finalists from some JSON
 * data.
 */
export default class ColoringContestContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }

    utils.fetchContestData().then(data => {
      this.setState({
        ready: true,
        data
      })
    }).catch(e => {
      this.setState({
        ready: true,
        error: e
      })
    })
  }

  render() {
    if (!this.state.ready) {
      // TODO Maybe use a spinner logo?
      return <div>Loading...</div>
    } else if (this.state.error) {
      console.error(this.state.error)
      return <div style={{ fontSize: '1.5em', color: 'red' }}>Something went wrong</div>
    }

    let { finalists, gFormLink, rawHtml } = this.state.data

    // Gather finalists into groups of 3 (or value of MAX_ITEMS)
    let groups = finalists.reduce((acc, curr) => {
      if (acc.length === 0 || acc[acc.length - 1].length === MAX_ITEMS) {
        acc.push([])
      }

      acc[acc.length - 1].push(curr)

      return acc
    }, [])

    // Map the groups into div "row" elements
    // Each finalist is mapped into the finalist component
    let rows = groups.map((group, i) =>
      <div key={`coloring-contest-row-${i}`} className='coloring-contest-row'>
        {
          group.map((finalist, j) =>
            <ColoringContestFinalist
              key={`coloring-contest-finalist-${i}-${j}`}
              name={finalist.name}
              thumbSrc={finalist.thumbnailLink}
              submissionLink={finalist.submissionLink} />
          )
        }
      </div>
    )

    let gForm = gFormLink == null
      ? <div style={{ fontSize: '1.5em', color: 'red' }}>Google Form failed to load</div>
      : <iframe title='coloring-contest-form' src={gFormLink} frameBorder='0' marginHeight='0' marginWidth='0'>Loading…</iframe>
    return <div id='coloring-contest-container'>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
      {rows}
      {gForm}
    </div>
  }
}
