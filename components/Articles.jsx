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

// utility functions
import {
  handleError, request, parseDate
} from '../utilities/app.utilities.js';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loaded: false, category: null };
  }

  async componentDidMount() {
    const { category, max, mode } = this.props;

    try {
      // request category articles
      let articles_data = await request(`/articles?category=${category}&preview=true&per_page=${max}`);
      let categories_data = await request(`/category/${category}`);

      /*
       * NOTICE: articles_data is an array contaning article block components,
       * NOT the article page components. below we sort the articles by date,
       * and create Article (block) components
       */
      articles_data =
        articles_data
          .sort((a, a2) => moment(a2.date).diff(a.date))
          .map(a => parseDate(a))
          .map((s, i) => <Article text_only={mode === 'text-only'} {...s} key={i} />);

      this.setState({ articles: articles_data, loaded: true, category: categories_data });

    } catch (error) {
      handleError(error.message);
    }
  }

  render() {
    const { articles, category, loaded } = this.state;
    const { mode } = this.props;

    let classes = ['articles'];

    if (loaded) {
      classes.push(mode);
    } else {
      return (<Loading />);
    }

    /* if (loaded) {
      if (mode === 'major') {
        classes.push('major-articles-grid');

        if (articles.length <= 2) {
          classes.push('short-grid');
        }
      } else {
        classes.push('minor-articles-grid');
      }
    } else {
      classes.push('center');
    } */

    return (
      <div className='articles'>
        <h1 dangerouslySetInnerHTML={{ __html: category.name }}></h1>
        <div className={classes.join(' ')} id={`${category.id}`}>
          {
            articles
          }
        </div>
      </div>
    );
  }
}
