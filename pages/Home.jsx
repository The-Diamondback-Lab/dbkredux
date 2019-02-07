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
    let featuredData = parseDate(await request('/featured_article'));
    let sponsoredContent = (await request('/pages/sponsored-content')).content.rendered;
    let description = "The Diamondback is the independent student-run newspaper at the University of Maryland. The Diamondback is updated online daily and can be accessed at dbknews.com. In print, it is published weekly on Thursday and is available at dozens of locations throughout the campus and around College Park.";

    return {
      featuredData,
      sponsoredContent,
      description
    };
  }

  render() {
    const { featuredData, sponsoredContent, description } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{"The Diamondback"}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description} />
        </Head>
        <main className='page'>
          <div className='container'>
            <div className='homepage'>
              <div className="left-rail">
                <div className = 'featured-story-area'>
                  <FeaturedArticle data={featuredData} />
                  <Articles category="latest" max={4} mode="text-only" no_loading={true} />
                </div>
                <Articles category="campus" max={4} mode="major-articles-grid" />
                <Articles category="sports" max={4} mode="major-articles-grid" />
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
