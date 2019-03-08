/* eslint-disable space-before-function-paren */

import React from 'react';

import NoSSR from 'react-no-ssr';

import { Link } from '../routes';

// jquery
import $ from 'jquery';

// components
import Navigation from '../components/Navigation.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Searchbar from '../components/Searchbar.jsx';
import Takeover from '../components/Takeover.jsx';

// constants
import {
  BREAKPOINTS
} from '../constants/constants.config.js';


// utility functions
import { responsive } from '../utilities/app.utilities.js';


/**
 * Header class. Renders the header.
 */
export default class Header extends React.Component {
  /**
   * Renders the header.
   */

  constructor(props){
    super(props);
    this.state = { scrolled: false, mobileState: false };    
  }

  toggleSidebar = () => {
    if ($("#sidebar").css("left") !== '0px'){
      $("#sidebar").css("left", '0px');
    }
    else{
      $("#sidebar").css("left", "-100%");
    }
  }


  componentDidMount() {
    var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');
    //forces re-render
    this.setState( {scrolled: false, mobileState: mobile });

    $(window).resize(() => {
      var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');
      //forces re-render
      this.setState( {scrolled: this.state.scrolled, mobileState: mobile} );
    });

    $(window).scroll(event => {
      const { scrolled } = this.state;
      let scrolledState = this.getScrolledState();
      if (scrolledState !== scrolled){
        this.setState( {scrolled: scrolledState} ); 
      }
    });
  }

  componentWillUnmount() {
    $(window).unbind('resize');
    $(window).unbind('scroll');
  }

  getScrolledState = () => {
    const offset = 0;
    let header = document.getElementById("masthead");
    if (!header) {
      return;
    }
    const check = header.getBoundingClientRect().bottom-2;
    return !((check + offset) >= 0 && (check - offset) <= window.innerHeight);    
  }

  render() {
    const { scrolled, mobileState } = this.state;
    const { menu } = this.props;
    var searchBar = "";
    if (!mobileState){
      searchBar = <Searchbar mobile={false} />
    }


    return (
      <React.Fragment>
        <NoSSR>
          <Takeover mobile={mobileState} />
        </NoSSR>
        <header id="header" className={`${scrolled ? 'pad-bottom' : ''}`} >
          <div id="masthead" className={`container${mobileState ? ' disappear' : ''}`}>
            <React.Fragment>
              <NoSSR>
                <Link to="/">
                  <a><img src="/static/images/the-diamondback-logo.svg" alt='The Diamondback' /></a>
                </Link>
                {searchBar}
              </NoSSR>
            </React.Fragment>
          </div>

          {/* navigation */}
          <Navigation menu={menu} scrolled={scrolled} toggleSidebar={this.toggleSidebar} mobile={mobileState} />
          <Sidebar scrolled={scrolled} mobile={mobileState} />
        </header>
      </React.Fragment>
    );
  }
}
