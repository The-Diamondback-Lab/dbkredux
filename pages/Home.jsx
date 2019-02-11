/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';
import Head from 'next/head';

// components
import FeaturedArticle from '../components/FeaturedArticle';
import Advertisement from '../components/Advertisement';
import ArticlesPreloaded from '../components/ArticlesPreloaded';
import Articles from '../components/Articles';

import { request, parseDate, loadHomepageArticles, HOMEPAGE_REQUESTS } from '../utilities/app.utilities';

export default class Home extends React.Component {
  static async getInitialProps() {
    let featuredData = parseDate(await request('/featured_article'));
    let sponsoredContent = (await request('/pages/sponsored-content')).content.rendered;
    let articlesData = await loadHomepageArticles(HOMEPAGE_REQUESTS);

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
                  <ArticlesPreloaded data={articlesData[0]} mode="text-only" category="latest" />
                </div>
                <ArticlesPreloaded data={articlesData[1]} mode="major-articles-grid" category="campus" />
                <ArticlesPreloaded data={articlesData[2]} mode="major-articles-grid" category="sports" />
                <div className = 'homepage-row'>
                  <Articles category="sports" max={6} mode="first-featured" />
                  <Articles category="sports" max={6} mode="first-featured" />
                </div>
                <div className = 'homepage-row'>
                  <Articles category="sports" max={6} mode="first-featured" />
                  <Articles category="campus" max={6} mode="first-featured" />
                  <Articles category="sports" max={6} mode="first-featured" />
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
                <Articles category="womens-basketball" max={1} mode="single-article" />
                <Articles category="football" max={1} mode="single-article" />
                <Articles category="field-hockey" max={1} mode="single-article" />
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
                  <Articles category="sports" max={1} mode="single-article" />
                  <Articles category="campus" max={1} mode="single-article" />
                  <Articles category="sports" max={1} mode="single-article" />
                  <Articles category="sports" max={1} mode="single-article" />
                </div>
                <div className = 'homepage-row'>
                  <Articles category="sports" max={1} mode="single-article" />
                  <Articles category="campus" max={1} mode="single-article" />
                  <Articles category="sports" max={1} mode="single-article" />
                  <Articles category="sports" max={1} mode="single-article" />
                </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
