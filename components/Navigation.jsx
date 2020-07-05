/* eslint-disable camelcase */

import React from 'react'

// react router
import { Link } from '../routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import NoSSR from 'react-no-ssr'

export default class Navigation extends React.Component {
  render() {
    const { menu } = this.props
    if (menu === null) {
      return <div className='container'>
        <div className='navigation-links' />
      </div>
    }

    return (
      <nav id='nav-bar'>
        <div className='container'>
          <div className='navigation-links'>
            <NoSSR><NavigationButton toggleSidebar={this.props.toggleSidebar} /></NoSSR>&nbsp;
            {/* don't show links if on mobile */}
            <NoSSR><NavigationLinks menu={menu.items} /></NoSSR>
          </div>
          <div className='navigation-links-social'>
            <a href='https://www.facebook.com/TheDiamondback/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} size='lg' />
            </a>
            <a href='https://twitter.com/thedbk' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} size='lg' />
            </a>
            <a href='https://www.instagram.com/thedbk/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </a>
            <a href='https://www.youtube.com/user/DiamondbackVideo' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faYoutube} size='lg' />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

class NavigationButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hamburgerActive: false
    }
  }
  render() {
    let ha = this.state.hamburgerActive
    let hamburgerClass = 'hamburger hamburger--slider ' + (ha ? 'is-active' : '')
    return (
      <div>
        <button id='menu-btn' className={hamburgerClass} type='button' onClick={e => this._onClick(e, ha)}>
          <span className='hamburger-box'>
            <span className='hamburger-inner' />
          </span>
        </button>
        <Link href='/'><a className='mobile-dbk-logo'><img src='/static/images/the-diamondback-logo.svg' alt='The Diamondback' /></a></Link>
      </div>
    )
  }

  /**
   * @param {boolean} ha current hamburger active state property
   */
  _onClick = (e, ha) => {
    this.props.toggleSidebar()
    this.setState({ hamburgerActive: !ha })
    // this.props.toggleSidebar();
  }
}

class NavigationLinks extends React.Component {
  render() {
    const { menu } = this.props
    return (
      <React.Fragment>
        {menu.map((item, i) => {
          if (item.type === 'custom') {
            return (
              <a
                className='disappear-on-mobile'
                href={item.url}
                key={`link-${i}`}
                target='_blank'
                rel='noopener noreferrer' >
                {item.title}
              </a>)
          }
          return (
            <Link href={item.url} key={`link-${i}`}>
              <a className='disappear-on-mobile'>{item.title}</a>
            </Link>
          )
        })}
        <a
          className='special-nav disappear-on-mobile'
          href='/donate'
          target='_blank'
          rel='noopener noreferrer' >
          Donate
        </a>
        <a
          className='special-nav disappear-on-mobile'
          href='https://dbknews.us9.list-manage.com/subscribe/post?u=589bc6727b2e01217b65a369e&id=bfdcfcc0db'
          target='_blank'
          rel='noopener noreferrer' >
          Newsletter
        </a>
        <a
          className='special-nav disappear-on-mobile'
          href='https://issuu.com/thediamondback'
          target='_blank'
          rel='noopener noreferrer' >
          Print Edition
        </a>
      </React.Fragment>
    )
  }
}
