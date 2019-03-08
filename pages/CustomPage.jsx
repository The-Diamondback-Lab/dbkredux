// react
import * as React from 'react';
import Head from 'next/head';

import {
  request
} from '../utilities/app.utilities.js';

import ErrorPage from './ErrorPage.jsx';

//components
import Advertisement from '../components/Advertisement';
import SponsoredLinks from '../components/SponsoredLinks';


/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

export default class CustomPage extends React.Component {

  static async getInitialProps({ query }) {
    var pageId = query.pageId;
    try {
      var page_data = await request(`/pages/${pageId}`);
      return {
        page: page_data
      }
    }
    catch (e) {
      console.log(e);
      return {
        page: null
      }
    }
  }

  render() {
    const { page } = this.props;
    if (!page){
      return <ErrorPage code={"404"}/>
    }
    else {
      return <React.Fragment>
        <Head>
          <title>{page.title + " - The Diamondback  "}</title>
          <meta property="og:title" content={page.title + " - The Diamondback  "} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className='page custom-page'>
          <div className='container-narrow'>
            <h1 dangerouslySetInnerHTML={{__html: page.title}}></h1>
          </div>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <hr />
              <div id="page-content" dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
            </div>
            <div className='right-rail'>
              <Advertisement path='300x250_Banner_B' size={[300, 250]} mode="desktop" />
              <br />
              <Advertisement path='300x600_Banner_C' size={[300, 600]} mode="desktop" />
              <br />
              <SponsoredLinks />
            </div>
          </div>
        </main>
      </React.Fragment>
    }
  }
}
