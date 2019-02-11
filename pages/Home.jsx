/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';
import Head from 'next/head';

// components
import FeaturedArticle from '../components/FeaturedArticle';
import Advertisement from '../components/Advertisement';
import Articles from '../components/Articles';

// components
// import Advertisement from '../components/Advertisement.jsx';

import { request, parseDate, loadHomepageArticles } from '../utilities/app.utilities';
// import { HOMEPAGE_CONFIG } from '../utilities/homepage.config';

export default class Home extends React.Component {
  static async getInitialProps() {
    let featuredData = parseDate(await request('/featured_article'));
    let sponsoredContent = (await request('/pages/sponsored-content')).content.rendered;
    HOMEPAGE_CONFIG = require('../utilities/homepage.config');
    let articlesData = await loadHomepageArticles(HOMEPAGE_CONFIG);

    return {
      featuredData,
      articlesData,
      sponsoredContent
    };
  }

  render() {
    const { featuredData, articlesData, sponsoredContent } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className='page'>
          <div className='container'>
            <div className='homepage'>
              <div className="left-rail">
                <div className = 'featured-story-area'>
                  <FeaturedArticle data={featuredData} />
                  <Articles data={articlesData.textOnly.data[0]} mode="text-only" />
                </div>
                <Articles data={articlesData.majorArticlesGrid.data[0]} mode="major-articles-grid" />
                <Articles data={articlesData.majorArticlesGrid.data[1]} mode="major-articles-grid" />
                <div className = 'homepage-row'>
                  <Articles data={articlesData.firstFeatured.data[0]} mode="first-featured" />
                  <Articles data={articlesData.firstFeatured.data[1]} mode="first-featured" />
                </div>
                <div className = 'homepage-row'>
                  <Articles data={articlesData.firstFeatured.data[2]} mode="first-featured" />
                  <Articles data={articlesData.firstFeatured.data[3]} mode="first-featured" />
                  <Articles data={articlesData.firstFeatured.data[4]} mode="first-featured" />
                </div>
              </div>
              <div className="right-rail-show">
                <Advertisement path='300x250_Banner_B' size={[300, 250]} />
                <br />
                <Advertisement path='300x600_Banner_C' size={[300, 600]} mode="desktop" />
                <br />
                <div className = 'ad-row'>
                  <Advertisement path='120x90_Banner_D' size={[120, 90]} />
                  <Advertisement path='120x90_Banner_F' size={[120, 90]} />
                </div>
                <br />
                <Articles data={articlesData.singleArticle.data[0]} mode="single-article" />
                <Articles data={articlesData.singleArticle.data[1]} mode="single-article" />
                <Articles data={articlesData.singleArticle.data[2]} mode="single-article" />
                <br />
                <Advertisement path='300x250_Banner_G' size={[300, 250]} />
                <br />
                <div className='sponsored-content-homepage'>
                  <h2>Sponsored</h2>
                  <div dangerouslySetInnerHTML={{__html: sponsoredContent}} />
                </div>
              </div>
            </div>
            <div className='homepage-bottom'>
                <div className = 'homepage-row'>
                  <Articles data={articlesData.singleArticle.data[3]} mode="single-article" />
                  <Articles data={articlesData.singleArticle.data[4]} mode="single-article" />
                  <Articles data={articlesData.singleArticle.data[5]} mode="single-article" />
                  <Articles data={articlesData.singleArticle.data[6]} mode="single-article" />
                </div>
                <div className = 'homepage-row'>
                  <Articles data={articlesData.singleArticle.data[7]} mode="single-article" />
                  <Articles data={articlesData.singleArticle.data[8]} mode="single-article" />
                  <Articles data={articlesData.singleArticle.data[9]} mode="single-article" />
                  <Articles data={articlesData.singleArticle.data[10]} mode="single-article" />
                </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
