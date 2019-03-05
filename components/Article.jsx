/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react';

// react router
import { Link } from '../routes';

// jquery
import { loadImage } from '../utilities/app.utilities';
import LazyLoad from 'react-lazyload';

export default class Article extends React.Component {

  render() {
    const { author, date, id, link, title, featured_image, text_only } = this.props;
    var img_id = Math.random().toString(36).replace('0.', '');
    var featuredImage = <Link href={link}><a><div className='article-block-image' /></a></Link>;
    if (featured_image) {
      featuredImage = (<Link href={link}>
        <a>
          <LazyLoad>
            <img
              alt='Article'
              className='article-block-image preload'
              id={img_id} src={featured_image.article}
              onLoad={() => loadImage(img_id)} />
          </LazyLoad>
        </a>
      </Link>);
    }

    if (text_only) {
      return (
        <div className='article-text-block'>
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
      )
    }
    return (
      <figure className='article-block fadeIn animated'>
        {featuredImage}
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
