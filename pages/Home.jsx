import React from 'react'
import Head from 'next/head'

// components
import FeaturedArticle from '../components/FeaturedArticle'
import Advertisement from '../components/Advertisement'
import ArticlesPreloaded from '../components/ArticlesPreloaded'
import Articles from '../components/Articles'
import SponsoredLinks from '../components/SponsoredLinks'
import SponsoredArticles from '../components/SponsoredArticles'

import { request, parseDate, loadHomepageArticles, HOMEPAGE_REQUESTS } from '../utilities/app.utilities'

export default class Home extends React.Component {
  static async getInitialProps() {
    let dataPromises = await Promise.all([
      request('/featured_article'),
      loadHomepageArticles(HOMEPAGE_REQUESTS)
    ])

    let featuredData = parseDate(dataPromises[0])
    let articlesData = dataPromises[1]

    return {
      featuredData,
      articlesData
    }
  }

  render() {
    const { featuredData, articlesData } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <main className='page'>
          <div className='container'>
            <div className='homepage'>
              <div className='left-rail'>
                <div className='featured-story-area'>
                  <FeaturedArticle data={featuredData} />
                  <ArticlesPreloaded data={articlesData[0]} mode='text-only' category='latest' />
                </div>
                <ArticlesPreloaded data={articlesData[1]} mode='major-articles-grid' category='campus' />
                <ArticlesPreloaded data={articlesData[2]} mode='major-articles-grid' category='sports' />
                <SponsoredArticles mode='tablet-and-below-only' />
                <div className='homepage-row'>
                  <Articles category='local' max={6} mode='first-featured' />
                  <Articles category='music' max={6} mode='first-featured' />
                </div>
              </div>
              <div className='right-rail-show'>
                <SponsoredArticles mode='desktop-only' />
                <br />
                <Advertisement path='300x250_Banner_B' size={[300, 250]} />
                <br />
                <Advertisement path='300x600_Banner_C' size={[300, 600]} mode='desktop' />
                <br />
                <div className='ad-row'>
                  <Advertisement path='120x90_Banner_D' size={[120, 90]} />
                  <Advertisement path='120x90_Banner_F' size={[120, 90]} />
                </div>
                <br />
                <Articles category='staff-editorial' max={1} mode='single-article' />
                <Articles category='opinion' max={3} mode='first-featured' />
                <br />
                <Advertisement path='300x250_Banner_G' size={[300, 250]} />
                <br />
                <SponsoredLinks />
              </div>
            </div>
            <div className='homepage-bottom'>
              <div className='homepage-row'>
                <Articles category='culture' max={1} mode='single-article' />
                <Articles category='movies' max={1} mode='single-article' />
                <Articles category='tv' max={1} mode='single-article' />
                <Articles category='arts' max={1} mode='single-article' />
              </div>
              <div className='homepage-row'>
                <Articles category='campus-life' max={1} mode='single-article' />
                <Articles category='science-tech' max={1} mode='single-article' />
                <Articles category='state' max={1} mode='single-article' />
                <Articles category='nation' max={1} mode='single-article' />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
