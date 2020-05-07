// react
import * as React from 'react'
import Head from 'next/head'

// components
import Advertisement from '../components/Advertisement'
import LoadedArticles from '../components/LoadedArticles'
import SponsoredLinks from '../components/SponsoredLinks'

// layout
import ErrorPage from '../pages/ErrorPage.jsx'

/* eslint-disable camelcase */

export default class SearchResults extends React.Component {
  static async getInitialProps(context) {
    if (context.query.q) {
      return {
        search: context.query.q
      }
    } else {
      return {
        search: ''
      }
    }
  }

  render() {
    const { search } = this.props

    if (!search) {
      return <ErrorPage code='404' />
    } else {
      return <React.Fragment>
        <Head>
          <title key='title'>{`${search} - The Diamondback  `}</title>
          <meta key='og:title' property='og:title' content='Search Results - The Diamondback' />
          <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <main className='page search-results'>
          <div className='container-narrow'>
            <h1>Search: &quot;{search}&quot;</h1>
          </div>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <hr />
              <LoadedArticles type='search' param={search} />
            </div>
            <div className='right-rail'>
              <Advertisement path='300x250_Banner_B' size={[300, 250]} />
              <br />
              <Advertisement path='300x600_Banner_C' size={[300, 600]} />
              <br />
              <SponsoredLinks />
            </div>
          </div>
        </main>
      </React.Fragment>
    }
  }
}
