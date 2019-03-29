/* eslint-disable space-before-function-paren */

import React from 'react';

// axios
import axios from 'axios';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default class Takeover extends React.Component {

  _mounted = false;

  state = { desktop: null, mobile: null, loaded: false };

  async componentDidMount() {
    //get takeover data from S3
    try {
      let resp = await axios.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");
      let desktop = {
        link: resp.data.takeover_desktop,
        img: "https://s3.amazonaws.com/dbk-ads-s3/takeover-desktop.jpg"
      };
      let mobile = {
        link: resp.data.takeover_mobile,
        img: "https://s3.amazonaws.com/dbk-ads-s3/takeover-mobile.jpg"
      };
      this.setState( {desktop: desktop, mobile: mobile, loaded: true});
      // window.addEventListener('scroll', this.resizeHeaderOnScroll);  
      this._mounted = true;
    }
    catch (e) {
      this.setState( {loaded: false })
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.resizeHeaderOnScroll);
  }
  

  visitedTakeover = () =>{
    let cookie=document.cookie;
    let seen = (cookie.indexOf('visitedTakeover',0) !== -1);
    return seen;
  }

  closeTakeover = () => {
    $("#takeover-desktop").hide();
    $("#takeover-mobile").hide();
    let cookie = document.cookie; 
    if (cookie.indexOf('visitedTakeover\x3d', 0) === -1) {
      document.cookie = 'visitedTakeover\x3d1;max-age\x3d360;path\x3d/';
    }
  }

  resizeHeaderOnScroll = () => { 
    if (!$('.takeover').length){
      return;
    }
    const distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 50;
    if (distanceY > shrinkOn) { 
      $("#takeover-desktop").css('opacity', '0');
      $("#takeover-mobile").css('opacity', '0');
      window.setTimeout(1000); 
    } 
    else { 
      $("#takeover-desktop").css('opacity', '1');
      $("#takeover-mobile").css('opacity', '1');
      window.setTimeout(1000);       
    }
  } 

  render() {
    const { loaded, desktop, mobile } = this.state;
    if (this.visitedTakeover() || !loaded){
      return "";
    }

    return (
      <React.Fragment>
        <div className='takeover' id='takeover-desktop'>
          <button id='close-takeover' onClick={this.closeTakeover}><FontAwesomeIcon icon={faTimes} /></button>
          <a href={desktop.link} target="_blank" rel="noopener">
            <img
            alt='Takeover Ad' 
            id='takeover-image' 
            src={desktop.img}  />
          </a>
        </div>

        <div className='takeover' id='takeover-mobile'>
        <button id='close-takeover' onClick={this.closeTakeover}><FontAwesomeIcon icon={faTimes} /></button>
        <a href={mobile.link} target="_blank" rel="noopener">
          <img
          alt='Takeover Ad' 
          id='takeover-image' 
          src={mobile.img} />
        </a>
      </div>
      </React.Fragment>        
      );
  }
}
