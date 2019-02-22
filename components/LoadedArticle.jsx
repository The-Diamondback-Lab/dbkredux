/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

// react
import * as React from 'react';

// react router
import { Link } from '../routes';

import {
  loadImage
} from '../utilities/app.utilities.js';

import LazyLoad from 'react-lazyload';


export default class LoadedArticle extends React.Component {

  render() {
    const { author, date, id, link, title, excerpt, featured_image } = this.props;

    var featuredImage = <Link href={link}>
    <div className="loaded-article-picture"></div>
    </Link>;
    
    if (featured_image) {
      featuredImage = <Link href={link}>
      <a className="loaded-article-picture" >
        <LazyLoad>
          <img 
          alt="Article"
          className="picture preload" 
          id={`image-${id}`} 
          src={featured_image.preview} 
          onLoad={() => loadImage("image-"+id)} />
        </LazyLoad>
      </a>
      </Link>;
    }

    return (
      <div className="loaded-article-block fadeIn animated">
        {featuredImage}
        <div className="loaded-article-details">
          <Link href={link}><a><h2 dangerouslySetInnerHTML={{__html: title}}></h2></a></Link>
          <Link href={link}><a dangerouslySetInnerHTML={{ __html: excerpt }}></a></Link>
          <div className="loaded-article-author-date">
            <Link href={author.link}><a><p className="author">{author.name}</p></a></Link>
            <p>{date.formatted}</p>
          </div>
        </div>
      </div>
    );
  }
}

