/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';
import Head from 'next/head';

// components
import Section from '../components/Section.jsx';
import FeaturedArticle from '../components/FeaturedArticle';
import Advertisement from '../components/Advertisement';
import Articles from '../components/Articles';

// components
// import Advertisement from '../components/Advertisement.jsx';

import { request, parseDate } from '../utilities/app.utilities';

export default class Home extends React.Component {
  static async getInitialProps() {
    var sections = [
      {
        category: { name: 'campus', id: 'campus' },
        max: 4,
        section_type: 'major'
      },
      {
        category: { name: 'music', slug: 'music', id: 'music' },
        max: 1,
        section_type: 'minor'
      },
      {
        category: { name: 'sports', slug: 'sports', id: 'sports' },
        max: 4,
        section_type: 'major'
      },
      {
        category: { name: 'science & tech', slug: 'science-and-tech', id: 'science-and-tech' },
        max: 1,
        section_type: 'minor'
      }
    ];

    let featuredData = parseDate(await request('/featured_article'));

    return {
      sections,
      featuredData
    };
  }

  render() {
    const { sections, featuredData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{"The Diamondback"}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className='page'>
          <div className='container'>
            <div className='homepage'>
              <div className="left-rail">
                <div className = 'featured-story-area'>
                  <FeaturedArticle data={featuredData} />
                  <Articles category="latest" max={5} mode="text-only" />
                </div>
                <Articles category="campus" max={4} mode="major-articles-grid" />
                <Articles category="sports" max={4} mode="major-articles-grid" />
                <div className = 'homepage-row'>
                  <Articles category="sports" max={7} mode="first-featured" />
                  <Articles category="sports" max={7} mode="first-featured" />
                </div>
                <div className = 'homepage-row'>
                  <Articles category="sports" max={7} mode="first-featured" />
                  <Articles category="campus" max={7} mode="first-featured" />
                  <Articles category="sports" max={7} mode="first-featured" />
                </div>
              </div>
              <div className="right-rail-show">
                <Advertisement path='300x250_Banner_B' size={[300, 250]} />
                <br />
                <Advertisement path='300x600_Banner_C' size={[300, 600]} mode="desktop" />
                <br />
                <div class = 'ad-row'>
                  <Advertisement path='120x90_Banner_D' size={[120, 90]} />
                  <Advertisement path='120x90_Banner_F' size={[120, 90]} />
                </div>
                <br />
                <Articles category="basketball-women" max={1} mode="single-article" />
                <Articles category="football" max={1} mode="single-article" />
                <Articles category="field-hockey" max={1} mode="single-article" />
                <br />
                <Advertisement path='300x250_Banner_G' size={[300, 250]} />
                <br />
                <h2 style = {{'text-align': 'center'}}>Sponsored Content</h2>
              </div>
            </div>
            <div class='homepage-bottom'>
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
