/* eslint-disable space-before-function-paren */

// NOTICE: importing reactn instead of react
import React from 'reactn';

// google ad manager
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

// components
import Loading from './Loading.jsx';

export default class Advertisement extends React.Component {
  _mounted = false;

  constructor(props) {
    super(props);
    this.state = { path: props.path, size: props.size, mode: null, loaded: false };
  }

  componentDidMount() {
    this._mounted = true;

    const { path, size, mode } = this.props;
    var displayMode = mode;

    if (typeof mode === 'undefined'){
      displayMode = "";
    }

    if (this._mounted) {
      // update component state with props
      this.setState({ path: path, size: size, mode: displayMode, loaded: true });
    }
  }
  
  componentWillUnmount() {
    this._mounted = false;
  }

  /**
   * Based on this.state.path and this.state.size, this function renders an
   * advertisement component.
   *
   * @return renders an ad component
   */
  render() {
    const { path, size, mode, loaded } = this.state;

    return !loaded
      ? ""
      : (
        <div className={`advertisement ad-${mode}`} id={`ad-${path}`}>
          {/* <AD path={`/123934970/${path}`} responsive={false} /> */}
          <DFPSlotsProvider dfpNetworkId={'123934970'} >
            <AdSlot adUnit={path} sizes={[ size ]} />
          </DFPSlotsProvider>
        </div>
      );
  }
}
