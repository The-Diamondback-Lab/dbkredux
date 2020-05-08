/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default class Loading extends React.Component {
  render() {
    const { text } = this.props
    return (
      <div className='loading'>
        <div className='container'>
          {
            text
              ? (
                <div className='fadeInOut'>
                  <h1 className='loading-text'>THE DIAMONDBACK</h1>
                  {/* <i className='far fa-spinner fa-spin animated' /> */}
                </div>
              )
              : (
                <div className='spinner' style={{ 'width': '200px', 'height': '200px' }}>
                  <FontAwesomeIcon icon={faSpinner} className='far fa-spinner fa-spin animated' size='lg' />
                </div>
              )
          }
        </div>
      </div>
    )
  }
}
