// react
import * as React from 'react'
import { Link } from '../routes'
import Head from 'next/head'
import { withRouter } from 'next/router'
import Parser from 'html-react-parser'

// components
import Advertisement from '../components/Advertisement'
import SponsoredLinks from '../components/SponsoredLinks'

import {
  loadImage, loadDynamicArticleContent, getArticlePreviewData
} from '../utilities/app.utilities.js'

/* eslint-disable camelcase */

class ArticlePreview extends React.Component {
  state = { article: null };

  async componentDidMount() {
    const { postId, wpnonce } = this.props.router.query
    let article = await getArticlePreviewData(postId, wpnonce)
    this.setState({ article: article })
  }

  generateCategories(categoryList) {
    return categoryList.map((cat) => (
      <Link href={cat.link} key={cat.id}><a>{Parser(cat.name)}</a></Link>))
  }

  render() {
    const { article } = this.state
    if (!article) {
      return <h1>Error - can&quot;t display preview!</h1>
    }

    let featuredImage = ''
    if (article.featured_image) {
      featuredImage = <React.Fragment>
        <div className='image-area'>
          <img
            alt='Article'
            className='article-image'
            id={'image-' + article.id} src={article.featured_image.link}
            onLoad={() => (loadImage('image-' + article.id))} />
        </div>
        <span className='article-caption' dangerouslySetInnerHTML={{ __html: article.featured_image.caption.rendered }} />
      </React.Fragment>
    }

    return (
      <React.Fragment>
        <Head>
          <title>{'Preview Post - ' + article.title.rendered + ' - The Diamondback  '}</title>
          <script async src='https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c418704770faa57' />
        </Head>
        <main className='page article-page'>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <div className='category'>{this.generateCategories(article.categories)}</div>
              <h1 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
              <div className='details'>
                <span className='accent author'><Link href={article.author.link}><a>{article.author.name}</a></Link></span>
                {
                  article.author.user_twitter
                    ? <React.Fragment>
                      <span className='dot'>·</span>
                      <span className='accent author twitter-link'><a href={`https://twitter.com/${article.author.user_twitter}`}>{`@${article.author.user_twitter}`}</a></span>
                    </React.Fragment>
                    : ''
                }
              </div>
              <div className='addthis_inline_share_toolbox' />
              {featuredImage}
              <div id='article-text' className='article-text after-js'>
                {loadDynamicArticleContent(article.content.rendered)}
              </div>
              <hr />
            </div>
            <div className='right-rail'>
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
    )
  }
}

export default withRouter(ArticlePreview)
