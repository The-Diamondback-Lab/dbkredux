import * as React from 'react'

/**
 * Wrapper for an image tag that renders a finalist's thumbnail.
 */
export default class ContestThumbnail extends React.Component {
  render() {
    return <a href={this.props.submissionLink} target='_blank' rel='noopener noreferrer'>
      <img
        className='coloring-contest-thumb'
        src={this.props.src}
        alt={this.props.alt} />
    </a>
  }
}
