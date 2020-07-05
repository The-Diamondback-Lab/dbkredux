/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react'

// react router
import Link from 'next/link'

// jquery
import { loadImage, getArticleDateDisplay } from '../utilities/app.utilities'
import LazyLoad from 'react-lazyload'

export default class Article extends React.Component {
  render() {
    const { author, categories, link, title, featured_image, text_only } = this.props
    let img_id = Math.random().toString(36).replace('0.', '')
    let featured_image_link = '/static/images/article-fallback.png'
    if (featured_image) {
      featured_image_link = featured_image.article
    }

    let featuredImage = (<Link href={link}>
      <a>
        <LazyLoad offset={200}>
          <img
            alt='Article'
            className='article-block-image preload'
            id={img_id} src={featured_image_link}
            onLoad={() => loadImage(img_id)} />
        </LazyLoad>
      </a>
    </Link>)

    if (text_only) {
      return (
        <div className='article-text-block'>
          <Link href={link}>
            <a
              dangerouslySetInnerHTML={{ __html: title }}
              className='article-block-title' />
          </Link>

          <div className='article-info'>
            <Link href={author.link}>
              <a
                dangerouslySetInnerHTML={{ __html: author.name }}
                className='article-block-author' />
            </Link>
            <p
              dangerouslySetInnerHTML={{ __html: getArticleDateDisplay(this.props) }}
              className='article-block-published' />
          </div>
        </div>
      )
    }

    return (
      <figure className={`article-block fadeIn animated ${categories.map(cat => cat.id).join(' ')}`}>
        {featuredImage}
        <figcaption>
          <div className='container'>
            <Link href={link}>
              <a
                dangerouslySetInnerHTML={{ __html: title }}
                className='article-block-title' />
            </Link>

            <div className='article-info'>
              <Link href={author.link}>
                <a
                  dangerouslySetInnerHTML={{ __html: author.name }}
                  className='article-block-author' />
              </Link>
              <p
                dangerouslySetInnerHTML={{ __html: getArticleDateDisplay(this.props) }}
                className='article-block-published' />
            </div>
          </div>
        </figcaption>
      </figure>
    )
  }
}
