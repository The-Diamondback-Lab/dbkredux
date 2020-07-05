/* eslint-disable react/jsx-closing-bracket-location */
import * as React from 'react'

import ColoringContestFinalist from './ColoringContestFinalist'
import * as utils from './utils'

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

    let renderedFinalists = finalists.map((finalist, i) =>
      <ColoringContestFinalist
        key={`coloring-contest-finalist-${i}`}
        name={finalist.name}
        thumbSrc={finalist.thumbnailLink}
        submissionLink={finalist.submissionLink}
      />
    )

    let gForm = gFormLink == null
      ? <div style={{ fontSize: '1.5em', color: 'red' }}>Google Form failed to load</div>
      : <iframe title='coloring-contest-form' src={gFormLink} frameBorder='0' marginHeight='0' marginWidth='0'>Loading…</iframe>
    return <div id='coloring-contest-container' className='article-text'>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
      <div className='coloring-contest-finalist-set'>
        {renderedFinalists}
      </div>
      {gForm}
    </div>
  }
}
