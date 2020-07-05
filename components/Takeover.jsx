import React from 'react'

import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// import Advertisement from '../components/Advertisement'
import { AdSlot } from 'react-dfp'

export default class Takeover extends React.Component {
  _mounted = false;

  state = { loaded: false };

  componentDidMount() {
    let visited = this.visitedTakeover()
    if (!visited) {
      this.setState({ loaded: true })
    }
  }

  visitedTakeover = () => {
    let cookie = document.cookie
    let seen = (cookie.indexOf('visitedTakeover', 0) !== -1)
    return seen
  }

  handleCloseTakeover = () => {
    $('#takeover').hide()
    let cookie = document.cookie
    if (cookie.indexOf('visitedTakeover\x3d', 0) === -1) {
      document.cookie = 'visitedTakeover\x3d1;max-age\x3d360;path\x3d/'
    }
  }

  render() {
    const { loaded } = this.state
    if (!loaded) {
      return ''
    }
    return (
      <div className='takeover display-none' id='takeover'>
        <button id='close-takeover' onClick={this.handleCloseTakeover}><FontAwesomeIcon icon={faTimes} /></button>
        <div className='advertisement ad-desktop' id='ad-takeover-desktop'>
          <AdSlot
            adUnit='1920x300_Billboard'
            sizes={[[1920, 300]]}
            onSlotRender={eventData => {
              if (!eventData.event.isEmpty) {
                $('#takeover').removeClass('display-none')
              }
            }} />
        </div>
        <div className='advertisement ad-mobile' id='ad-takeover-mobile'>
          <AdSlot
            adUnit='400x200_Billboard_Mobile'
            sizes={[[400, 200]]}
            onSlotRender={eventData => {
              if (!eventData.event.isEmpty) {
                $('#takeover').removeClass('display-none')
              }
            }} />
        </div>

      </div>
    )
  }
}
