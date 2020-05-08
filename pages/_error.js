import * as React from 'react'
import ErrorPage from './ErrorPage'

export default class Error extends React.Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    return (
      <ErrorPage code={String(statusCode)} />
    )
  }
}
