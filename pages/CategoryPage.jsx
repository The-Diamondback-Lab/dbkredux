// react
import * as React from 'react'
import { Link } from '../routes'
import Router from 'next/router'
import Head from 'next/head'

// components
import Advertisement from '../components/Advertisement'
import LoadedArticles from '../components/LoadedArticles'
import SponsoredLinks from '../components/SponsoredLinks'

import ErrorPage from '../pages/ErrorPage.jsx'

import {
  request
} from '../utilities/app.utilities.js'

/* eslint-disable camelcase */

export default class CategoryPage extends React.Component {
  static async getInitialProps({ query }) {
    let categorypath = query.categorypath
    let categoryId = categorypath.substring(categorypath.lastIndexOf('/') + 1)
    try {
      let category_data = await request(`/category/${categoryId}`)
      /*
        If the navigated URL has a valid category at the end of the path but is not the correct URL, redirect it to the correct URL
      */
      if ('/category/' + categorypath + '/' !== category_data.link) {
        return {
          category: null,
          redirect_url: category_data.link
        }
      }
      return {
        category: category_data
      }
    } catch (e) {
      console.log(e)
      return {
        category: null
      }
    }
  }

  componentDidMount() {
    if (this.props.category === null) {
      Router.push(this.props.redirect_url)
    }
  }

  render() {
    const { category } = this.props
    if (!category) {
      return <ErrorPage code='404' />
    } else {
      return <React.Fragment>
        <main className='page category-page'>
          <Head>
            <title key='title' dangerouslySetInnerHTML={{ __html: category.name + ' - The Diamondback  ' }} />
            <meta key='og:title' property='og:title' content={category.name + ' - The Diamondback  '} />
            <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <div className='container-narrow'>
            <h1><Link href={category.link}><a dangerouslySetInnerHTML={{ __html: category.name }} /></Link></h1>
            <span>{category.description}</span>
          </div>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <hr />
              <LoadedArticles type='category' param={category.id} />
            </div>
            <div className='right-rail'>
              <Advertisement path='300x250_Banner_B' size={[300, 250]} mode='desktop' />
              <br />
              <Advertisement path='300x600_Banner_C' size={[300, 600]} mode='desktop' />
              <br />
              <SponsoredLinks />
            </div>
          </div>
        </main>
      </React.Fragment>
    }
  }
}
