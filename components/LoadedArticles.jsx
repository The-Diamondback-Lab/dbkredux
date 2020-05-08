/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import React from 'react'

// components
import LoadedArticle from '../components/LoadedArticle'
import Loading from '../components/Loading.jsx'

// utility functions
import {
  request, parseDate
} from '../utilities/app.utilities.js'

/*
  A list of articles that loads additional articles when the "Load more posts" button is clicked.
*/
export default class LoadedArticles extends React.Component {
  state = { articles: [], loaded: false, page: 1, no_more_posts: false };

  async componentDidMount() {
    const { type, param } = this.props
    this.setState({ articles: [], loaded: false, page: 1, no_more_posts: false }, () => this.load(type, param))
  }

  async componentWillReceiveProps(newProps) {
    const { type, param } = newProps
    this.setState({ articles: [], loaded: false, page: 1, no_more_posts: false }, () => this.load(type, param))
  }

  async load(type, param) {
    const page = this.state.page
    let articles = this.state.articles

    try {
      let articles_data = []
      if (type === 'search') {
        articles_data = await request(`/articles?${type}=${param}&preview=true&per_page=10&page=${page}&orderby=relevance&order=desc`)
        articles_data =
        articles_data
          .map(a => parseDate(a))
          .map((s, i) => <React.Fragment key={i}><LoadedArticle {...s} /><hr /></React.Fragment>)
      } else {
        articles_data = await request(`/articles?${type}=${param}&preview=true&per_page=10&page=${page}&orderby=date&order=desc`)
        articles_data =
        articles_data
          .map(a => parseDate(a))
          .map((s, i) => <React.Fragment key={i}><LoadedArticle {...s} /><hr /></React.Fragment>)
      }

      articles = articles.concat(articles_data)
      this.setState({ articles: articles, loaded: true, page: page, no_more_posts: false })
    } catch (error) {
      const { articles, loaded, page } = this.state
      this.setState({ articles: articles, loaded: loaded, page: page, no_more_posts: true })
    }
  }

  handleLoadNext = () => {
    const { type, param } = this.props
    const { articles, loaded, page, no_more_posts } = this.state
    this.setState({ articles: articles, loaded: loaded, page: page + 1, no_more_posts: no_more_posts }, () => this.load(type, param))
  }

  render() {
    const { articles, loaded, no_more_posts } = this.state

    if (!loaded) {
      return <Loading />
    } else {
      let button = <button className='loadmore' onClick={this.handleLoadNext}>Load More Posts</button>
      if (articles.length === 0) {
        return <h3>No posts found.</h3>
      }
      if (no_more_posts) {
        button = <h3>No more posts to show.</h3>
      }
      return <React.Fragment>
        {articles}
        {button}
      </React.Fragment>
    }
  }
}
