// react
import * as React from 'reactn';
import { Link } from '../routes';
import Head from 'next/head';

// components
import Advertisement from '../components/Advertisement';
import LoadedArticles from '../components/LoadedArticles';
import SponsoredLinks from '../components/SponsoredLinks';

import ErrorPage from './ErrorPage.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import {
  request, loadImage
} from '..//utilities/app.utilities.js';


/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

export default class AuthorPage extends React.Component {

  static async getInitialProps({ query }) {
    var authorId = query.authorId;
    try {
      var author_data = await request(`/author/${authorId}`);
      return {
        author: author_data
      }
    }
    catch (e) {
      return {
        author: null
      }
    }
  }


  render() {
    const { author } = this.props;
    if (!author) {
      return <ErrorPage />
    }
    else {
      return <React.Fragment>
        <Head>
          <title>{author.name + " - The Diamondback  "}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content={author.name} />
          <meta property="og:title" content={author.name + " - The Diamondback  "} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content={author.avatar_urls['96']} />
        </Head>
        <main className='page author-page'>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <div className='author-section'>
                <div id={`${author.slug}-image`} className='author-image' onLoad={() => loadImage(`${author.slug}-image`)}>
                  <img src={author.avatar_urls['96']} alt='Author Avatar' />
                </div>
                <div className='author-info'>
                  <h1><Link href={author.link}><a>{author.name}</a></Link></h1>
                </div>
              </div>
              <p className='author-description' dangerouslySetInnerHTML={{ __html: author.description }} />
              <div className='links-row'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
                <a href={`mailto:${author.user_email}`} dangerouslySetInnerHTML={{ __html: author.user_email }} target='_blank'></a>
              </div>
              {author.user_twitter ? (
                <div className='links-row'>
                  <FontAwesomeIcon icon={faTwitter} size='lg' />
                  <a href={`https://twitter.com/${author.user_twitter}`} dangerouslySetInnerHTML={{ __html: author.user_twitter }} target='_blank'></a>
                </div>
              )
                : ""}
              <hr />
              <LoadedArticles type="author" param={author.slug}></LoadedArticles>
            </div>
            <div className='right-rail'>
              <br />
              <br />
              <br />
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
