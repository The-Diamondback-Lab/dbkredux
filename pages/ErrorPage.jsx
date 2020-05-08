// react
import * as React from 'react'
import { Link } from '../routes'
import Head from 'next/head'

import { ERRORS } from '../utilities/app.utilities'

export default class ErrorPage extends React.Component {
  render() {
    const { code } = this.props
    let display = ERRORS[code]
    return <React.Fragment>
      <Head>
        <title key='title'>{`${code} - The Diamondback`}</title>
        <meta key='og:title' property='og:title' content={`${code} - The Diamondback`} />
        <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='page error-page'>
        <div className='container-narrow'>
          <h1>{display.header}</h1>
          <hr />
          <p>{display.message} You can <Link href='/'><a>return home</a></Link> if you&apos;d like.</p>
        </div>
      </main>
    </React.Fragment>
  }
}
