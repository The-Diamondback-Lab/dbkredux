/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react';

// react router
import { Link } from '../routes';

// jquery
import { loadImage } from '../utilities/app.utilities';
/*
 * TODO: check if this.props.data.featured_media === 0
 * if so -> .article-block.text, otherwise .article-block.image
 */

export default class FeaturedArticle extends React.Component {
  render() {
    const { author, date, id, link, title, featured_image } = this.props.data;

    let featuredImage = "";
    if (featured_image) {
      featuredImage = (<a>
        <img
          alt='Article'
          className='article-block-image'
          id={`image-${id}`} src={featured_image.article}
          onLoad={() => loadImage(`image-${id}`)} />
      </a>);
    }
    else {
      featuredImage = (<a>
        <div
          className='article-block-image' />
      </a>)
    }
    return (
      <figure className='article-block featured-article'>
        <Link href={link}>
          {featuredImage}
        </Link>
        <figcaption>
          <div className='container'>
            <Link href={link}>
              <a dangerouslySetInnerHTML={{ __html: title }}
                className='article-block-title'></a>
            </Link>

            <div className='article-info'>
              <Link href={author.link}>
                <a dangerouslySetInnerHTML={{ __html: author.name }}
                  className='article-block-author'></a>
              </Link>
              <p
                dangerouslySetInnerHTML={{ __html: date.ago }}
                className='article-block-published'
              />
            </div>
          </div>
        </figcaption>
      </figure>
    );
  }
}
