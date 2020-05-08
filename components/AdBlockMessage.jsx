import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class AdBlockMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
    this.closeAdBlockMessage = this.handleCloseAdBlockMessage.bind(this)
  }

  componentDidMount() {
    console.log('AD BLOCKER DETECTED')
    // SEND TO GOOGLE ANALYTICS
  }

  handleCloseAdBlockMessage() {
    this.setState({ show: false })
    let cookie = document.cookie
    if (cookie.indexOf('adBlockDetected\x3d', 0) === -1) {
      document.cookie = 'adBlockDetected\x3d1;max-age\x3d360;path\x3d/'
    }
  }

  adMessageShown() {
    let cookie = document.cookie
    let seen = (cookie.indexOf('adBlockDetected', 0) !== -1)
    return seen
  }

  render() {
    const { show } = this.state

    let showMessage = show && !this.adMessageShown()
    return showMessage ? <div className='ad-block-message animated fadeIn'>
      <div>
        <button id='close-ad-block-message' onClick={this.handleCloseAdBlockMessage}><FontAwesomeIcon icon={faTimes} /><span>Close</span></button>
        <img alt='Ad Block Message' src='/static/images/adblocker.jpg' />
      </div>
    </div> : ''
  }
}
