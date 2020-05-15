import * as React from 'react'

import { Link } from '../routes'

import { request } from '../utilities/app.utilities'

export default class ArticleBanner extends React.Component {
  state = { data: null, loaded: false }

  async componentDidMount() {
    try {
      // Fetch article banner
      let data = await request(`/banner_article`)

      this.setState({
        data,
        loaded: true
      })
    } catch (error) {
      // Instead of throwing an error, just silently ignore it and display nothing (banner
      // articles aren't crucial to production, and if it's not showing up, then it'll be
      // very obvious)
      this.setState({
        data: null,
        loaded: true
      })
    }
  }

  render() {
    const { data, loaded } = this.state

    // If the data hasn't loaded yet or it's null, don't show anything
    if (!loaded || data == null) {
      // Return an empty div
      return <div />
    } else {
      try {
        let headline = data.acf['banner-article-headline'] || data.title
        let link = data.link

        // If for any reason the headline or link aren't defined, return an empty div
        if (headline == null || link == null) {
          return <div />
        }

        return <Link href={link}>
          <div id='banner-article' className='container'><a>{headline}</a></div>
        </Link>
      } catch (e) {
        // Couldn't show the banner article because of an unexpected error
        console.log(e)
        return <div />
      }
    }
  }
}
