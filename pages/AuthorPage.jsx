// react
import * as React from 'react'
import { Link } from '../routes'
import Head from 'next/head'

// components
import Advertisement from '../components/Advertisement'
import LoadedArticles from '../components/LoadedArticles'
import SponsoredLinks from '../components/SponsoredLinks'

import ErrorPage from './ErrorPage.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import {
  request
} from '..//utilities/app.utilities.js'
import * as uss from 'underscore.string'

/* eslint-disable camelcase */

export default class AuthorPage extends React.Component {
  static async getInitialProps({ query }) {
    let authorId = query.authorId
    try {
      let author_data = await request(`/author/${authorId}`)
      return {
        author: author_data
      }
    } catch (e) {
      return {
        author: null
      }
    }
  }

  render() {
    const { author } = this.props
    if (!author) {
      return <ErrorPage code='404' />
    } else {
      return <React.Fragment>
        <Head>
          <title key='title' dangerouslySetInnerHTML={{ __html: author.name + ' - The Diamondback  ' }} />
          <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta key='author' name='author' content={uss.unescapeHTML(author.name)} />
          <meta key='og:title' property='og:title' content={uss.unescapeHTML(author.name + ' - The Diamondback  ')} />
          <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
          <meta property='og:image' content={author.avatar_urls['96']} />
        </Head>
        <main className='page author-page'>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <div className='author-section'>
                <div className='author-info'>
                  <h1><Link href={author.link}><a>{author.name}</a></Link></h1>
                </div>
              </div>
              <p className='author-description' dangerouslySetInnerHTML={{ __html: author.description }} />
              <div className='links-row'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
                <a href={`mailto:${author.user_email}`} dangerouslySetInnerHTML={{ __html: author.user_email }} target='_blank' rel='noopener noreferrer' />
              </div>
              {author.user_twitter ? (
                <div className='links-row'>
                  <FontAwesomeIcon icon={faTwitter} size='lg' />
                  <a href={`https://twitter.com/${author.user_twitter}`} dangerouslySetInnerHTML={{ __html: author.user_twitter }} target='_blank' rel='noopener noreferrer' />
                </div>
              )
                : ''}
              <hr />
              <LoadedArticles type='author' param={author.slug} />
            </div>
            <div className='right-rail'>
              <br />
              <br />
              <br />
              <Advertisement path='300x250_Banner_B' size={[300, 250]} mode='desktop' />
              <br />
              <Advertisement path='300x600_Banner_C' size={[300, 600]} mode='desktop' />
              <br />
              <SponsoredLinks />
            </div>
          </div>
        </main>
      </React.Fragment>
    }
  }
}
