// TODO Remove this because this isn't used anywhere?

/**
 *
 * Detect Ad Blockers
 *
 * Copyright (c) 2017 James Robert Perih
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

import React, { Component } from 'react'

class DetectAdBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      adBlockDetected: false
    }

    this.detectAdBlocker = this.handleDetectAdBlocker.bind(this)
  }

  componentDidMount() {
    this.handleDetectAdBlocker()
  }

  handleDetectAdBlocker() {
    const head = document.getElementsByTagName('head')[0]

    const noAdBlockDetected = () => {
      this.setState({
        adBlockDetected: false
      })
    }

    const adBlockDetected = () => {
      console.log('detected')
      this.setState({
        adBlockDetected: true
      })
    }

    // clean up stale bait
    const oldScript =
            document.getElementById('adblock-detection')
    if (oldScript) {
      head.removeChild(oldScript)
    }

    // we will dynamically generate some 'bait'.
    const script = document.createElement('script')
    script.id = 'adblock-detection'
    script.type = 'text/javascript'
    script.src = '/ads.js'
    script.onload = noAdBlockDetected
    script.onerror = adBlockDetected

    head.appendChild(script)
  }

  noticeContentJSX() {
    return (
      <div id='adblock-notice'>
        <div className='message'>
          <h3>Hey, you!</h3>
          <p>Your adblocker is on again.</p>
          <button onClick={this.handleDetectAdBlocker}>Check for Adblocker again</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id='adblock-wrapper'>
        { this.state.adBlockDetected
          ? this.noticeContentJSX()
          : null}
      </div>
    )
  }
}

export default DetectAdBlock
