import React from 'react'

import NoSSR from 'react-no-ssr'

import { Link } from '../routes'

// jquery
import $ from 'jquery'

// components
import Navigation from '../components/Navigation.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'

/**
 * Header class. Renders the header.
 */
export default class Header extends React.Component {
  /**
   * Renders the header.
   */

  toggleSidebar = () => {
    if ($('#sidebar').css('left') !== '0px') {
      $('#sidebar').css('left', '0px')
    } else {
      $('#sidebar').css('left', '-100%')
    }
  }

  render() {
    const { menu } = this.props
    let searchBar = <Searchbar mobile={false} />

    return (
      <React.Fragment>
        <header id='header' className='header-main'>
          <div id='masthead' className='container'>
            <React.Fragment>
              <NoSSR>
                <Link href='/'>
                  <a><img src='/static/images/the-diamondback-logo.svg' alt='The Diamondback' /></a>
                </Link>
                {searchBar}
              </NoSSR>
            </React.Fragment>
          </div>

          {/* navigation */}
        </header>
        <header className='sticky-on-scroll'>
          <Navigation menu={menu} toggleSidebar={this.toggleSidebar} />
          <Sidebar />
        </header>
      </React.Fragment>
    )
  }
}
