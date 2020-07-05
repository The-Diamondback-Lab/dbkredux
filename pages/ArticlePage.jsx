// react
import * as React from 'react'
import { Link } from '../routes'
import Head from 'next/head'
import Parser from 'html-react-parser'
import * as uss from 'underscore.string'
import { Timeline } from 'react-twitter-widgets'

import ErrorPage from './ErrorPage.jsx'

import $ from 'jquery'

// components
import RelatedContent from '../components/RelatedContent'
import Advertisement from '../components/Advertisement'
import SponsoredLinks from '../components/SponsoredLinks'
import DonateBar from '../components/DonateBar'

import {
  request,
  parseDate,
  loadImage,
  processArticleBody,
  loadDynamicArticleContent,
  getArticleDateDisplay
} from '../utilities/app.utilities.js'

/* eslint-disable camelcase */

export default class ArticlePage extends React.Component {
  state = { scriptjsLoaderEnabled: false };

  static async getInitialProps({ query }) {
    let article_data = null
    try {
      article_data = await request(`/articles/${query.slug}`)
      article_data = parseDate(article_data)
    } catch (error) {
      console.log(error)
      return {
        article: null
      }
    }

    return {
      article: article_data
    }
  }

  async componentDidUpdate() {
    if (document.getElementById('article-text') !== null) {
      processArticleBody(document.getElementById('article-text'))
    }
  }

  componentDidMount() {
    this.setState({ scriptjsLoaderEnabled: true })
  }

  generateCategories(categoryList) {
    return categoryList.map((cat) => (
      <Link href={cat.link} key={cat.id}><a>{Parser(cat.name)}</a></Link>))
  }

  render() {
    const { article } = this.props
    if (!article) {
      return <ErrorPage code='404' />
    }

    let featuredImage = ''
    if (article.featured_image) {
      featuredImage = <React.Fragment>
        <div className='image-area'>
          <img
            alt='Article'
            className='article-image'
            id={'image-' + article.id} src={article.featured_image.article}
            onLoad={() => (loadImage('image-' + article.id))} />
        </div>
        <span className='article-caption' dangerouslySetInnerHTML={{ __html: article.featured_image.caption }} />
      </React.Fragment>
    }
    // injects article ads after window loads
    let article_body = <div id='article-text-before' className='article-text before-js' dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
    let article_body_ads = ''
    if (this.state.scriptjsLoaderEnabled) {
      $('#article-text-before').hide()
      article_body_ads = <div id='article-text' className='article-text after-js'>
        {loadDynamicArticleContent(article.content.rendered)}
      </div>
    }

    let description = article.excerpt.rendered
    description = description.replace('<p>', '')
    description = description.replace('</p>', '')
    description = description.replace('\n', '')

    let dateString = getArticleDateDisplay(article)
    let dot = article.acf['date-to-show'] === 'no_date' ? '' : '·'

    return (
      <React.Fragment>
        <Head>
          <title key='title' dangerouslySetInnerHTML={{ __html: article.title + ' - The Diamondback  ' }} />
          <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta key='description' name='description' content={uss.unescapeHTML(description)} />
          <meta key='author' name='author' content={uss.unescapeHTML(article.author.name)} />
          <meta key='og:title' property='og:title' content={uss.unescapeHTML(article.title + ' - The Diamondback  ')} />
          <meta key='og:description' property='og:description' content={uss.unescapeHTML(description)} />
          {featuredImage
            ? <meta key='og:image' property='og:image' content={article.featured_image.article} />
            : ''}
          <meta key='twitter:card' name='twitter:card' content='summary_large_image' />

          <script async src='https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c418704770faa57' />
        </Head>
        <main className={`page article-page${article.categories.find(cat => cat.id === 'sponsored') ? ' sponsored-page' : ''}`}>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <div className='category'>{this.generateCategories(article.categories)}</div>
              <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
              <div className='details'>
                <span className='accent author'><Link href={article.author.link}><a>{article.author.name}</a></Link></span>
                <span className='dot'>{dot}</span>
                {
                  article.author.user_twitter
                    ? <React.Fragment>
                      <span className='accent author twitter-link'><a href={`https://twitter.com/${article.author.user_twitter}`}>{`@${article.author.user_twitter}`}</a></span>
                      <span className='dot'>·</span>
                    </React.Fragment>
                    : ''
                }
                <span
                  dangerouslySetInnerHTML={{ __html: dateString }} />
              </div>
              <div className='addthis_inline_share_toolbox' />
              {featuredImage}
              {article_body}
              {article_body_ads}
              <DonateBar />
            </div>
            <div className='right-rail'>
              <br />
              <br />
              <Advertisement path='300x250_Banner_B' size={[300, 250]} mode='desktop' />
              <br />
              <Advertisement path='300x600_Banner_C' size={[300, 600]} mode='desktop' />
              <br />
              <h3>Latest Tweets</h3>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'thedbk'
                }}
                options={{
                  username: 'thedbk',
                  width: '100%',
                  height: '606px'
                }} />
              <br />
              <br />
              <SponsoredLinks />
            </div>
          </div>
          <div className='container-narrow'>
            <RelatedContent categories={article.categories} story_id={article.id} />
          </div>
        </main>
      </React.Fragment>
    )
  }
}
