/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';

// react router
import { Link } from '../routes';

import { request } from '../utilities/app.utilities.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default class Navigation extends React.Component {

  constructor(props){
    super(props);
    this.state = { menu: null };
  }

  async componentDidMount() {
    let menu = await request('/menu/header');
    this.setState({ menu: menu.items});
  }

  render() {
    const { menu } = this.state;
    if (menu === null){
      return <div className="container"> 
      <div className='navigation-links'>

      </div>
    </div>
;
    }
    const { mobile } = this.global;

    const { scrolled } = this.props;

    return (
      <nav id="nav-bar" className={`${scrolled ? 'nav-sticky' : ''} ${mobile ? 'nav-mobile' : ''}`}>
        <div className="container"> 
          <div className='navigation-links'>
            <NavigationButton mobile={mobile} scrolled={scrolled} />&nbsp;
            {/* don't show links if on mobile */}
            {mobile ? null : <NavigationLinks menu={menu} />}
          </div>
        </div>
      </nav>
    );
  }
}

class NavigationButton extends React.Component {
  render() {
    const { mobile } = this.props;

    return (
      <div>
        <button id='menu-btn' onClick={e => this._onClick(e)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {
          /* only show small dbk logo if scrolled or mobile */
          mobile ? <Link href='/'><a className='mobile-dbk-logo'>DBK</a></Link> : null
        }
      </div>
    );
  }

  _onClick = e => {
    this.global.toggleSidebar();
  }
}

class NavigationLinks extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <React.Fragment>
        {menu.map((item, i) => {
          if (item.type === 'custom'){
            return (
            <a 
              className='dissapear-on-mobile' 
              href={item.url} 
              key={`link-${i}`}
              target='_blank'
              rel="noopener noreferrer"
            >
              {item.title}
            </a>);
          }
          return (
            <Link
              href={item.url} key={`link-${i}`}
            >
              <a className='disappear-on-mobile'>{item.title}</a>
            </Link>
          );
        })}
        <button
          className='special-nav disappear-on-mobile'>
          Newsletter
        </button>
        <a
          className='special-nav disappear-on-mobile'
          href="https://issuu.com/thediamondback"
          target="_blank"
          rel="noopener noreferrer"
        >
          Print Edition
        </a>
      </React.Fragment>
    );
  }
}
