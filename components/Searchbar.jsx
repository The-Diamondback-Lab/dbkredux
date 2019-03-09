import React from 'react';
import Router from 'next/router';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */

class Searchbar extends React.Component {

  searchClicked = () => {
    let searchTerm = $("#global-search-bar").val().toLowerCase().trim().replace(/\s\s+/g, ' ');
    searchTerm = searchTerm.replace(/[^A-Za-z0-9_\040]/g,"");
    if (searchTerm.length < 1){
      return;
    }
    if (searchTerm.length > 50){ //LIMIT SEARCHES TO 50 CHARACTERS
      searchTerm = searchTerm.substring(0, 50);
    }
    Router.push(`/search?q=${searchTerm}`);
  }

  keyPressed = (e) => {
    if (e.key === 'Enter') {
      this.searchClicked();
    }
  }

  render() {
    const { mobile } = this.props;
    return (
      <div className={`searchbar ${(mobile ? "searchbar-mobile" : "")}`}>
        <input id='global-search-bar' type='text' placeholder='Search' onKeyUp={this.keyPressed} />
        <button onClick = {this.searchClicked} >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default Searchbar;
