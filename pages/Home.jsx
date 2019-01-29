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
                <FeaturedArticle data={featuredData} />

                <Articles category="campus" max={4} mode="major-articles-grid" />
              </div>
              <div className="right-rail-show">
                <Advertisement path='300x250_Banner_B' size={[300, 250]} />
                <br />
                <Advertisement path='300x600_Banner_C' size={[300, 600]} mode="desktop" />
                <br />
                <Advertisement path='120x90_Banner_D' size={[120, 90]} />
                <br />
                <Advertisement path='120x90_Banner_F' size={[120, 90]} />
                <br />
                <Advertisement path='300x250_Banner_G' size={[300, 250]} />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
