import * as React from 'react'

import { handleError, request } from '../utilities/app.utilities'

export default class ArticleBanner extends React.Component {
  state = { data: null, loaded: false }

  async componentDidMount() {
    try {
      // Fetch article banner
      let data = await request(`/banner_article`)

      // If data is empty, set it to null for consistency
      if (data === '') {
        data = null
      }

      this.setState({
        data,
        loaded: true
      })

      // But what happens when there is no article banner to show? (aka the CGV is
      // not true?)
      // Change request helper to just throw the error instead of "handle it". This
      // will allow us to intercept the error and inspect it. If it's a 404 error,
      // then we can just return an empty div.
      // The handleError can still be there, but instead of wrapping the error inside
      // another error, just have handleError throw it.
    } catch (error) {
      handleError(error)
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
      // TODO Show banner
      // Red background
      // Headline in white text
      // Clicking it takes you to the article
    }
  }
}
