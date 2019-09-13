/* eslint-disable space-before-function-paren */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import React from 'react';

// components
import Article from '../components/Article.jsx';

import { Link } from '../routes';

// utility functions
import {
  handleError, request, parseDate
} from '../utilities/app.utilities.js';

export default class SponsoredArticles extends React.Component {

  state = { articles: [], loaded: false, category: null };

  async componentDidMount() {
    try {
      let raw_article = parseDate((await request(`/articles?category=sponsored&preview=true&per_page=1`))[0]);
      if (raw_article.date.longAgo) {
        return
      }
      let article = <Article text_only={false} {...raw_article} />;
      let category_data = raw_article.categories.find(cat => cat.id === 'sponsored');
      this.setState({ articles: article, category: category_data, loaded: true });
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    const { articles, category, loaded } = this.state;
    const { mode } = this.props;

    if (!loaded) {
      return '';
    }

    let header = <Link href={category.link}><a><h1 dangerouslySetInnerHTML={{ __html: category.name }}></h1></a></Link>;

    return (
      <div className={mode}>
        <div className={`articles ${category.id}`}>
          <Link href={category.link}>
            <a>
              <h1 dangerouslySetInnerHTML={{ __html: category.name }}></h1>
            </a>
          </Link>
          <div className='single-article' >
            {
              articles
            }
          </div>
        </div>
      </div>
    );
  }
}
