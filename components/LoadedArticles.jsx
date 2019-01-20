/* eslint-disable space-before-function-paren */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

// NOTICE: importing reactn instead of react
import React from 'reactn';

// moment
import moment from 'moment';

// components
import LoadedArticle from '../components/LoadedArticle';
import Loading from '../components/Loading.jsx';

// utility functions
import {
  request, parseDate
} from '../utilities/app.utilities.js';

/*
  A list of articles that loads additional articles when the "Load more posts" button is clicked.
*/
export default class LoadedArticles extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], loaded: false, page: 1, no_more_posts: false };
    this.loadNext = this.loadNext.bind(this);
  }

  async componentDidMount() {
    const { type, param } = this.props;
    this.setState({ articles: [], loaded: false, page: 1, no_more_posts: false }, () => this.load(type, param));
  }

  async componentWillReceiveProps(newProps) {
    const { type, param } = newProps;
    this.setState({ articles: [], loaded: false, page: 1, no_more_posts: false }, () => this.load(type, param));
  }

  async load(type, param) {
    const page = this.state.page;
    var articles = this.state.articles;

    try {
      var articles_data = [];
      articles_data = await request(`/articles?${type}=${param}&preview=true&per_page=10&page=` + page);

      articles_data =
        articles_data
          .sort((a, a2) => moment(a2.date).diff(a.date))
          .map(a => parseDate(a))
          .map((s, i) => <React.Fragment key={i}><LoadedArticle {...s} /><hr /></React.Fragment>);

      articles = articles.concat(articles_data);
      this.setState({ articles: articles, loaded: true, page: page, no_more_posts: false });

    } catch (error) {
      const { articles, loaded, page } = this.state;
      this.setState({ articles: articles, loaded: loaded, page: page, no_more_posts: true });
    }
  }

  loadNext() {
    const { type, param } = this.props;
    var { articles, loaded, page, no_more_posts } = this.state;
    this.setState({ articles: articles, loaded: loaded, page: page + 1, no_more_posts: no_more_posts }, () => this.load(type, param));
  }

  render() {
    const { articles, loaded, no_more_posts } = this.state;

    if (!loaded) {
      return <Loading />
    }
    else {
      var button = <button className='loadmore' onClick={this.loadNext}>Load More Posts</button>;
      if (articles.length === 0) {
        return <h3>No posts found.</h3>;
      }
      if (no_more_posts) {
        button = <h3>No more posts to show.</h3>;
      }
      return <React.Fragment>
        {articles}
        {button}
      </React.Fragment>;
    }
  }
}
