/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react'

// react router
import { Link } from '../routes'

// jquery
import { loadImage, getArticleDateDisplay } from '../utilities/app.utilities'

/*
 * TODO: check if this.props.data.featured_media === 0
 * if so -> .article-block.text, otherwise .article-block.image
 */

export default class FeaturedArticle extends React.Component {
  render() {
    const { author, id, link, title, featured_image } = this.props.data

    let featured_image_link = '/static/images/article-fallback.png'
    if (featured_image) {
      featured_image_link = featured_image.article
    }

    let featuredImage = (<a>
      <img
        alt='Article'
        className='article-block-image'
        id={`image-${id}`} src={featured_image_link}
        onLoad={() => loadImage(`image-${id}`)} />
    </a>)

    return (
      <figure className='article-block featured-article'>
        <Link href={link}>
          {featuredImage}
        </Link>
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
                dangerouslySetInnerHTML={{ __html: getArticleDateDisplay(this.props.data) }}
                className='article-block-published' />
            </div>
          </div>
        </figcaption>
      </figure>
    )
  }
}
