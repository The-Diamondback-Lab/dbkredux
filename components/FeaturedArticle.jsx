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

    return (
      <figure className='article-block featured-article'>
        <Link href={link}>
          <a>
            <img
            alt='Article'
            className='article-block-image'
            id={`image-${id}`} src={featured_image.article}
            onLoad={() => loadImage(`image-${id}`)}/>
          </a>
        </Link>
        <figcaption>
          <div className='container'>
            <Link href={link}>
              <a dangerouslySetInnerHTML={{ __html: title }}
              className='article-block-title'></a>
            </Link>

            <div className='article-info'>
              <Link href = {author.link}>
                <a dangerouslySetInnerHTML={{ __html: author.name }}
                className='article-block-author'></a>
              </Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: this._published(date.ago.published)
                }}
                className='article-block-published'
              />
            </div>
          </div>
        </figcaption>
      </figure>
    );
  }

  _published = (object) => {
    let published;

    if (object.hours < 24) {
      published = object.hours === 1
        ? '1 hour ago' : `${object.hours} hours ago`;
    } else {
      // NOTICE: disabling radix below because object.days is valid
      /* eslint-disable radix */

      let possible_weeks = parseInt(object.days / 7);

      // NOTICE: re-enabling radix below
      /* eslint-enable radix */

      published = object.days === 1
        ? '1 day ago'
        : object.days < 7
          ? `${object.days} days ago`
          : possible_weeks === 1
            ? '1 week ago'
            : `${possible_weeks} weeks ago`;
    }

    return published;
  }
}
