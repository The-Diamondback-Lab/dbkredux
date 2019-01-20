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
    this.state = { articles: [], loaded: false };
  }

  async componentWillMount() {
    const { category } = this.props;

    try {
      // request category articles
      let articles_data = await request(`/articles?category=${category.id}&preview=true`);
      
      /*
       * NOTICE: articles_data is an array contaning article block components,
       * NOT the article page components. below we sort the articles by date,
       * and create Article (block) components
       */
      articles_data =
        articles_data
          .sort((a, a2) => moment(a2.date).diff(a.date))
          .map(a => parseDate(a))
          .map((s, i) => <Article {...s} key={i} />);

      this.setState({ articles: articles_data, loaded: true });

    } catch (error) {
      handleError(error.message);
    }
  }

  render() {
    const { articles, loaded } = this.state;
    const { category, max, section } = this.props;

    return (
      <div
        className={`articles ${loaded
          ? section === 'major' ? 'major-articles-grid' : 'minor-articles-grid'
          : 'center'}`
        }
        id={`${category.slug}`}
      >
        {
          loaded ? articles.map((a, i) => i < max ? a : null) : <Loading />
        }
      </div>
    );
  }
}
