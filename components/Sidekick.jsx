/* eslint-disable space-before-function-paren */

import React from 'react';

// axios
import axios from 'axios';

import {
  loadImage
} from '../utilities/app.utilities.js';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Sidekick extends React.Component {

  state = { img: null, link: null, loaded: false };

  async componentDidMount() {
    try {
      let resp = await axios.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");

      let data = {
        link: resp.data.sidekick,
        img: "https://s3.amazonaws.com/dbk-ads-s3/sidekick.gif"
      }
      this.setState( {link: data.link, img: data.img, loaded: true} );  
    }
    catch (e) {
      this.setState( {loaded: false} );
    }
  }

  visitedSidekick = () => {
    let cookie=document.cookie;
    let seen = (cookie.indexOf("visitedSidekick",0) !== -1);
    return seen;
  }

  closeSidekick = () => {
    $("#sidekick").hide();
    let cookie = document.cookie; 
    if (cookie.indexOf("visitedSidekick\x3d", 0) === -1) {
      document.cookie = "visitedSidekick\x3d1;max-age\x3d360;path\x3d/" 
    }
  }

  resetSidekick() {
    if ($("#sidekick").length){
      $("#sidekick").fadeIn();
    }
  }

  render() {
    const { img, link, loaded } = this.state;
    if (this.visitedSidekick()){
      return "";
    }
    else{
      this.resetSidekick();
    }
    return !loaded ? '' :
    (
        <div className='sidekick animated fadeIn' id='sidekick'>
          <button id='close-sidekick' onClick={this.closeSidekick}><FontAwesomeIcon icon={faTimes} /></button>
          <a href={link} target="_blank">
            <img 
            alt='Sidekick Ad'
            className='preload' 
            id='sidekick-image' 
            src={img} 
            onLoad={() => loadImage('sidekick-image')} />
          </a>
        </div>
      );
  }
}
