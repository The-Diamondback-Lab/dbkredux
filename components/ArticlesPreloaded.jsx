/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import React from 'react'

// moment
import moment from 'moment'

// components
import Article from './Article.jsx'

import { Link } from '../routes'

// utility functions
import {
  parseDate
} from '../utilities/app.utilities.js'

export default class ArticlesPreloaded extends React.Component {
  getArticles = () => {
    const { mode, data, category } = this.props
    let categoryData = {}
    if (category === 'latest') {
      categoryData = {
        name: 'Latest',
        id: 'latest',
        link: ''
      }
    } else {
      categoryData = data[0].categories.find(cat => cat.id === category)
    }

    let articles =
      data
        .sort((a, a2) => moment(a2.date).diff(a.date))
        .map(a => parseDate(a))
        .map((s, i) => {
          if (mode === 'text-only' || (mode === 'first-featured' && i !== 0)) {
            return <Article text_only {...s} key={i} />
          } else {
            return <Article text_only={false} {...s} key={i} />
          }
        })

    return { articles, categoryData }
  }

  render() {
    const { mode } = this.props
    let { articles, categoryData } = this.getArticles()

    let classes = []

    classes.push(mode)
    let header = ''
    if (categoryData && categoryData.name === 'Latest') {
      header = <h1>Latest</h1>
    } else if (categoryData && categoryData.link) {
      header = <Link href={categoryData.link}><a><h1 dangerouslySetInnerHTML={{ __html: categoryData.name }} /></a></Link>
    }

    const style = `articles ${categoryData ? categoryData.id : ''}`

    return (
      <div className={style.trim()}>
        {header}
        <div className={classes.join(' ')} >
          {
            articles
          }
        </div>
      </div>
    )
  }
}
