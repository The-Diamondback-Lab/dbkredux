import * as React from 'react'
import ContestThumbnail from './ColoringContestThumbnail'

/**
 * Renders a div element that contains the finalist's thumbnail and name
 */
export default class ContestFinalist extends React.Component {
  render() {
    return <div className='coloring-contest-finalist'>
      <ContestThumbnail src={this.props.thumbSrc} submissionLink={this.props.submissionLink} />
      <div className='coloring-contest-name'>{this.props.name}</div>
    </div>
  }
}
