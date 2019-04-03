/* eslint-disable space-before-function-paren */

import React from 'react';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Advertisement from '../components/Advertisement'


export default class Takeover extends React.Component {

  _mounted = false;

  state = { loaded: false };

  componentDidMount() {
    let visited = this.visitedTakeover();
    if (!visited){
      this.setState({loaded: true});    
    }
  }

  visitedTakeover = () =>{
    let cookie=document.cookie;
    let seen = (cookie.indexOf('visitedTakeover',0) !== -1);
    return seen;
  }

  closeTakeover = () => {
    $("#takeover").hide();
    let cookie = document.cookie; 
    if (cookie.indexOf('visitedTakeover\x3d', 0) === -1) {
      document.cookie = 'visitedTakeover\x3d1;max-age\x3d360;path\x3d/';
    }
  }

  render() {
    const { loaded, desktop, mobile } = this.state;
    if (!loaded){
      return ''
    }
    return (
    <div className='takeover' id='takeover'>
      <button id='close-takeover' onClick={this.closeTakeover}><FontAwesomeIcon icon={faTimes} /></button>
      <Advertisement path='1920x300_Billboard' size={[1920, 300]} mode="desktop" />
      <Advertisement path='400x200_Billboard_Mobile' size={[400, 200]} mode="mobile" />
      </div>
    );
  }
}
