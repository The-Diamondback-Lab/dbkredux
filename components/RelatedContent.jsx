import React from 'react'

// moment
import moment from 'moment'

// components
import Article from '../components/Article.jsx'

// utility functions
import {
  handleError, request, parseDate
} from '../utilities/app.utilities.js'

export default class RelatedContent extends React.Component {
    state = { articles: [], loaded: false };

    async componentDidMount() {
      const { categories, story_id } = this.props

      let category = categories[0] // JUST GET RECOMMENDED ARTICLES BY FIRST CATEGORY FOR NOW
      try {
        // request category articles
        let articles_data = await request(`/articles?category=${category.id}&preview=true&per_page=4`)

        /*
             * NOTICE: articles_data is an array contaning article block components,
             * NOT the article page components. below we sort the articles by date,
             * and create Article (block) components
             */
        articles_data =
                articles_data
                  .sort((a, a2) => moment(a2.date).diff(a.date))
                  .filter(a => a.id !== story_id)
                  .map(a => parseDate(a))
                  .map((s, i) => <Article {...s} key={i} />)

        if (articles_data.length === 4) {
          articles_data.pop() // makes sure we're only getting a maximum of 3 articles
        }
        this.setState({ articles: articles_data, loaded: true })
      } catch (error) {
        handleError(error.message)
      }
    }

    render() {
      const { articles, loaded } = this.state
      if (!loaded) {
        return <div className='related-content'>
          <h2>Recommended Articles</h2>
        </div>
      } else {
        return <div className='related-content'>
          <hr />
          <h2>Recommended Articles</h2>
          <div className='related-articles-list'>
            {articles}
          </div>
        </div>
      }
    }
}
