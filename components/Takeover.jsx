/* eslint-disable space-before-function-paren */

// NOTICE: importing reactn instead of react
import React from 'reactn';

// components
import Loading from '../components/Loading.jsx';

// axios
import axios from 'axios';

import $ from 'jquery';

import {
  loadImage
} from '../utilities/app.utilities.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default class Takeover extends React.Component {

  constructor(props) {
    super(props);
    this.state = { desktop: null, mobile: null, loaded: false };
    this.closeTakeover = this.closeTakeover.bind(this);
    this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);
  }

  async componentDidMount() {
    //get takeover data from S3
    let resp = await axios.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");
    var desktop = {
      link: resp.data.takeover_desktop,
      img: "https://s3.amazonaws.com/dbk-ads-s3/takeover-desktop.jpg"
    };
    var mobile = {
      link: resp.data.takeover_mobile,
      img: "https://s3.amazonaws.com/dbk-ads-s3/takeover-mobile.jpg"
    };
    this.setState( {desktop: desktop, mobile: mobile, loaded: true});
    window.addEventListener('scroll', this.resizeHeaderOnScroll);
  }

  getTakeover() {
    const { desktop, mobile } = this.state;
    var link = desktop.link;
    var img = desktop.img;

    if (this.global.mobile) {
      link = mobile.link;
      img = mobile.img;
    }
    return {
      link: link,
      img: img
    };
  }

  visitedTakeover(){
    var cookie=document.cookie;
    var seen = (cookie.indexOf('visitedTakeover',0) !== -1);
    return seen;
  }

  closeTakeover() {
    $("#takeover").hide();
    var cookie = document.cookie; 
    if (cookie.indexOf('visitedTakeover\x3d', 0) === -1) {
      document.cookie = 'visitedTakeover\x3d1;max-age\x3d360;path\x3d/';
    }
  }

  resetTakeover() {
    if ($("#takeover").length){
      $("#takeover").fadeIn();
    }
  }

  resizeHeaderOnScroll() { 
    if (!$('#takeover').length){
      return;
    }
    const distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 50;
    if (distanceY > shrinkOn) { 
      $("#takeover").css('opacity', '0');
    } 
    else { 
      $("#takeover").css('opacity', '1');
    } 
  } 

  render() {
    const { loaded } = this.state;
    if (this.visitedTakeover()){
      return "";
    }
    else{
      this.resetTakeover();
    }
    if (!loaded) {
      return <Loading />
    }
    const { link, img } = this.getTakeover();

    return (
        <div className='takeover' id='takeover'>
          <button id='close-takeover' onClick={this.closeTakeover}><FontAwesomeIcon icon={faTimes} /><span>Close Ad</span></button>
          <a href={link} target="_blank">
            <img
            alt='Takeover Ad' 
            className='preload' 
            id='takeover-image' 
            src={img} 
            onLoad={() => loadImage('takeover-image')} />
          </a>
        </div>
      );
  }
}
