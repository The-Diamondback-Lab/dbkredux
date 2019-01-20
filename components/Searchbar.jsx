// NOTICE: importing reactn instead of react
import React from 'reactn';
import Router from 'next/router';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.searchClicked = this.searchClicked.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  searchClicked() {
    var searchTerm = $("#global-search-bar").val().toLowerCase().trim().replace(/\s\s+/g, ' ');
    if (searchTerm.length > 50){ //LIMIT SEARCHES TO 50 CHARACTERS
      searchTerm = searchTerm.substring(0, 50);
    }
    Router.push(`/search?q=${searchTerm}`);
  }

  keyPressed(e) {
    if (e.key === 'Enter') {
      this.searchClicked();
    }
  }

  render() {
    const { mobile } = this.global;
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
