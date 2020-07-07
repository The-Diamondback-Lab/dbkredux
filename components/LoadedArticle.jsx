/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react'

// react router
import { Link } from '../routes'

import {
  loadImage, getArticleDateDisplay
} from '../utilities/app.utilities.js'

import LazyLoad from 'react-lazyload'

export default class LoadedArticle extends React.Component {
  render() {
    const { author, id, link, title, excerpt, featured_image } = this.props

    let featured_image_link = '/static/images/article-fallback.png'
    if (featured_image) {
      featured_image_link = featured_image.preview
    }

    let featuredImage = <Link href={link}>
      <a className='loaded-article-picture' >
        <LazyLoad>
          <img
            alt='Article'
            className='picture preload'
            id={`image-${id}`}
            src={featured_image_link}
            onLoad={() => loadImage('image-' + id)} />
        </LazyLoad>
      </a>
    </Link>

    return (
      <div className='loaded-article-block fadeIn animated'>
        {featuredImage}
        <div className='loaded-article-details'>
          <Link href={link}><a><h2 dangerouslySetInnerHTML={{ __html: title }} /></a></Link>
          <Link href={link}><a dangerouslySetInnerHTML={{ __html: excerpt }} /></Link>
          <div className='loaded-article-author-date'>
            <Link href={author.link}><a><p className='author'>{author.name}</p></a></Link>
            <p>{getArticleDateDisplay(this.props)}</p>
          </div>
        </div>
      </div>
    )
  }
}
