import React from 'react'

import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// import Advertisement from '../components/Advertisement'
import { AdSlot } from 'react-dfp'

export default class Sidekick extends React.Component {
  state = { loaded: false };

  async componentDidMount() {
    this.setState({ loaded: true })
  }

  visitedSidekick = () => {
    let cookie = document.cookie
    let seen = (cookie.indexOf('visitedSidekick', 0) !== -1)
    return seen
  }

  handleCloseSidekick = () => {
    $('#sidekick').hide()
    let cookie = document.cookie
    if (cookie.indexOf('visitedSidekick\x3d', 0) === -1) {
      document.cookie = 'visitedSidekick\x3d1;max-age\x3d360;path\x3d/'
    }
  }

  resetSidekick() {
    if ($('#sidekick').length) {
      $('#sidekick').fadeIn()
    }
  }

  render() {
    const { loaded } = this.state
    if (this.visitedSidekick()) {
      return ''
    } else {
      this.resetSidekick()
    }
    return !loaded ? ''
      : (
        <div className='sidekick display-none' id='sidekick'>
          <button id='close-sidekick' onClick={this.handleCloseSidekick}><FontAwesomeIcon icon={faTimes} /></button>
          <div className='advertisement' id='ad-sidekick'>
            <AdSlot adUnit='250x120_Sidekick' sizes={[[250, 120]]} onSlotRender={eventData => { if (!eventData.event.isEmpty) { $('#sidekick').removeClass('display-none') } }} />
          </div>
        </div>
      )
  }
}
