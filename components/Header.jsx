/* eslint-disable space-before-function-paren */

// NOTICE: importing reactn instead of react
import React, { setGlobal } from 'reactn';

import { Link } from '../routes';

// jquery
import $ from 'jquery';

// components
import Navigation from '../components/Navigation.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Searchbar from '../components/Searchbar.jsx';

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
    this.state = { scrolled: false};
  }

  toggleSidebar() {
    if ($("#sidebar").css("left") !== '0px'){
      $("#sidebar").css("left", '0px');
    }
    else{
      $("#sidebar").css("left", "-100%");
    }
  }

  resetSidebar() {
    $("#sidebar").css("left", "-100%");
    $(".sidebar-item").removeClass("active");
  }


  async componentDidMount() {
    var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');
    setGlobal( {toggleSidebar: this.toggleSidebar, resetSidebar: this.resetSidebar, mobile: !!mobile} );
    //forces re-render
    this.setState( {scrolled: this.state.scrolled });

    $(window).resize(() => {
      var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');
      setGlobal( {toggleSidebar: this.toggleSidebar, resetSidebar: this.resetSidebar, mobile: !!mobile} );
      //forces re-render
      this.setState( {scrolled: this.state.scrolled} );
    });

    $(window).scroll(event => {
      const { scrolled } = this.state;
      const offset = 0;
      var header = document.getElementById("masthead");
      if (!header) {
        return;
      }
      const check = header.getBoundingClientRect().bottom-2;
      var scrolledState = !((check + offset) >= 0 && (check - offset) <= window.innerHeight);
      if (scrolledState !== scrolled){
        this.setState( {scrolled: scrolledState} );
      }
    });
  }

  componentWillUnmount() {
    $(window).unbind('resize');
    $(window).unbind('scroll');
  }

  render() {
    const { mobile } = this.global;
    const { scrolled } = this.state;
    // var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');
    var searchBar = "";
    if (!mobile){
      searchBar = <Searchbar />
    }


    return (
      <header id="header" className={`${scrolled ? 'pad-bottom' : ''}`} >
        <div id="masthead" className={`container${mobile ? ' disappear' : ''}`}>
          <React.Fragment>
            <Link to="/">
              <a><img src="/static/images/the-diamondback-logo.svg" alt='The Diamondback' /></a>
            </Link>
            {searchBar}
          </React.Fragment>
        </div>

        {/* navigation */}
        <Navigation scrolled={scrolled} />
        <Sidebar scrolled={scrolled}/>
      </header>
    );
  }
}
