/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';
import Head from 'next/head';

// components
import Section from '../components/Section.jsx';

// components
// import Advertisement from '../components/Advertisement.jsx';

export default class Home extends React.Component {

  static async getInitialProps() {
    var sections = [
      {
        category: { name: 'campus', slug: 'campus', id: 'campus' },
        max: 4,
        section_type: 'major'
      },
      {
        ads: [{ path: '300x600_Banner_C', size: [300, 600], mode: "desktop" }],
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
        ads: [
          { path: '300x250_Banner_B', size: [300, 250], mode: "desktop" },
          { path: '300x250_Banner_B', size: [300, 250], mode: "desktop" }
        ],
        category: { name: 'science & tech', slug: 'science-and-tech', id: 'science-and-tech' },
        max: 1,
        section_type: 'minor'
      }
    ];
    return {
      sections: sections
    };
  }

  render() {
    const { sections } = this.props;

    return (  
      <React.Fragment>
        <Head>
          <title>{"The Diamondback"}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className='page'>
          <div className='container'>
            <div className='landing'>
              {/* feature article, <ArticleBlock />  */}

              {/* three smaller articles, <ArticleBlock.Text /> */}
            </div>
            {/* categories */}
            {sections.map((c, i) => <Section {...c} key={i} />)}
          </div>
        </main>
      </React.Fragment>
    );
  }
}
