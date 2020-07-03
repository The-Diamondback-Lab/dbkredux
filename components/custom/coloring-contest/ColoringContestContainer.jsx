import * as React from 'react'

import axios from 'axios'
import ColoringContestFinalist from './ColoringContestFinalist'

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

    axios.get('/static/custom/coloring-contest/data.json')
      .then(resp => {
        this.setState({
          ready: true,
          data: resp.data
        })
      })
      .catch(err => {
        this.setState({
          ready: true,
          error: err
        })
      })
  }

  render() {
    if (!this.state.ready) {
      // TODO Maybe use a spinner logo?
      return <div>Loading...</div>
    } else if (this.state.error) {
      console.error(this.state.error)
      return <div style={{ fontSize: '2em', color: 'red' }}>Something went wrong</div>
    }

    let { finalists, formUrl } = this.state.data

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
            <ColoringContestFinalist key={`coloring-contest-finalist-${i}-${j}`} name={finalist.name} thumbSrc={finalist.thumbSrc} />
          )
        }
      </div>
    )
    return <div id='coloring-contest-container'>
      {rows}
      <iframe title='coloring-contest-form' src={formUrl} frameBorder='0' marginHeight='0' marginWidth='0'>Loading…</iframe>
    </div>
  }
}
