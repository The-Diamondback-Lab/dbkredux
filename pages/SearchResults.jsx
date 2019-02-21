// react
import * as React from 'reactn';
import Head from 'next/head';

// components
import Advertisement from '../components/Advertisement';
import LoadedArticles from '../components/LoadedArticles';
import SponsoredLinks from '../components/SponsoredLinks';

//layout
import ErrorPage from '../pages/ErrorPage.jsx';


/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

export default class SearchResults extends React.Component {

  static async getInitialProps(context) {
    if (context.query.q){
      return {
        search: context.query.q
      };  
    }
    else{
      return {
        search: ""
      };
    }
  }


  render() {
    const { search } = this.props;

    if (!search) {
      return <ErrorPage code={404}/>;
    }
    else {
      return <React.Fragment>
        <Head>
        <title>{`${search} - The Diamondback  `}</title>
        <meta property="og:title" content={`Search Results - The Diamondback`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='page search-results'>
        <div className='container-narrow'>
          <h1>Search: "{search}"</h1>
        </div>
        <div className='container-narrow flex'>
          <div className='left-rail'>
            <hr />
            <LoadedArticles type="search" param={search}></LoadedArticles>
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
