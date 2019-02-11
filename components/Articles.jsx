/* eslint-disable space-before-function-paren */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';

// moment
import moment from 'moment';

// components
import Article from '../components/Article.jsx';
import Loading from '../components/Loading.jsx';

import { Link } from '../routes';

// utility functions
import {
  handleError, request, parseDate
} from '../utilities/app.utilities.js';

export default class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.getArticles = this.getArticles.bind(this);

  }

  getArticles() {
    const { mode, data } = this.props;
    let articles =
      data.articles_data
        .sort((a, a2) => moment(a2.date).diff(a.date))
        .map(a => parseDate(a))
        .map((s, i) => {
          if (mode === 'text-only' || (mode === 'first-featured' && i !== 0)) {
            return <Article text_only={true} {...s} key={i} />;
          }
          else {
            return <Article text_only={false} {...s} key={i} />;
          }
        });
    return articles;
  }

  render() {
    const { mode, data } = this.props;
    let articles = this.getArticles();
    let category = data.categories_data;

    let classes = [];

    classes.push(mode);
    var header = "";
    if (category.name === 'Latest') {
      header = <h1>Latest</h1>;
    }
    else {
      header = <Link href={category.link}><a><h1 dangerouslySetInnerHTML={{ __html: category.name }}></h1></a></Link>;
    }

    return (
      <div className={`articles ${category.id}`}>
        {header}
        <div className={classes.join(' ')} >
          {
            articles
          }
        </div>
      </div>
    );
  }
}
