import React from 'react'
import { Link } from '../routes'

import Searchbar from '../components/Searchbar.jsx'

import { request } from '../utilities/app.utilities.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery'

export default class Sidebar extends React.Component {
    state = { menu: null };

    async componentDidMount() {
      const sidebar = await request('/menu/sidebar')
      let nestedMenus = sidebar.items.map((ele, i) => <NestedMenu data={ele} key={i} level={0} />)
      this.setState({ menu: nestedMenus })
    }

    render() {
      const { menu } = this.state

      if (menu === null) {
        return ''
      }

      let searchBar = ''

      searchBar = (<div className='search-section'>
        <Searchbar mobile />
      </div>)

      return (
        <div id='sidebar' className='sidebar' >
          {searchBar}
          {menu}
        </div>
      )
    }
}

const NestedMenu = (props) => {
  const { data, level } = props
  const id = 'sidebar-item-' + data.id
  let inner = ''

  if (typeof data.children !== 'undefined') {
    inner = data.children.map((ele, i) => <NestedMenu data={ele} key={i} level={level + 1} />)
  }

  // Menu item doesn't have any children
  else {
    if (data.type === 'custom') {
      return (
        <div id={id} className='sidebar-item'>
          <a href={data.url} className='sidebar-link' target='_blank' rel='noopener noreferrer'>
            <p>{data.title}</p>
          </a>
        </div>)
    }
    return (
      <div id={id} className='sidebar-item'>
        <Link href={data.url}>
          <a className='sidebar-link'><p>{data.title}</p></a>
        </Link>
      </div>)
  }

  const toggle = function (id) {
    $('#' + id).toggleClass('active')
  }
  return (
    <div id={id} className='sidebar-item has-children'>
      <div
        className='sidebar-link'
        onClick={() => toggle(id)} >
        <Link href={data.url}>
          <a><p>{data.title}</p></a>
        </Link>
        <FontAwesomeIcon icon={faCaretDown} size='2x' />
      </div>
      {inner}
    </div>
  )
}
