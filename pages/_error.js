import * as React from 'reactn';
import ErrorPage from './ErrorPage';

export default class Error extends React.Component {
    static getInitialProps ({ res, xhr }) {
      const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
      return { statusCode }
    }
  
    render () {
      return (
          <ErrorPage />
        )
    }
  }