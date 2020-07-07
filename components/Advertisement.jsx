import React from 'react'

// google ad manager
import { AdSlot } from 'react-dfp'

import LazyLoad from 'react-lazyload'

export default class Advertisement extends React.Component {
  _mounted = false;

  state = { path: this.props.path, size: this.props.size, mode: null, loaded: false };

  componentDidMount() {
    this._mounted = true

    const { path, size, mode } = this.props
    let displayMode = mode

    if (typeof mode === 'undefined') {
      displayMode = ''
    }

    if (this._mounted) {
      // update component state with props
      this.setState({ path: path, size: size, mode: displayMode, loaded: true })
    }
  }

  componentWillUnmount() {
    this._mounted = false
  }

  /**
   * Based on this.state.path and this.state.size, this function renders an
   * advertisement component.
   *
   * @return renders an ad component
   */
  render() {
    const { path, size, mode, loaded } = this.state

    return !loaded
      ? ''
      : (
        <LazyLoad>
          <div className={`advertisement ad-${mode}`} id={`ad-${path}`}>
            <AdSlot
              adUnit={path}
              sizes={[size]}
              onSlotRender={eventData => {
                if (eventData.event.isEmpty) {
                  document.getElementById('ad-' + path).style.display = 'none'
                }
              }} />
          </div>
        </LazyLoad>
      )
  }
}
