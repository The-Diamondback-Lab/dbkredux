// react
import * as React from 'react';
import { Link } from '../routes';
import Head from 'next/head';

//sass
import '../styles/sass/app.sass';



export default class ErrorPage extends React.Component {
  render() {
    return <React.Fragment>
      <Head>
        <title>{"404 - The Diamondback  "}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='page error-page'>
        <div className='container-narrow'>
          <h1>404: Page Not Found</h1>
          <hr />
          <p>We couldn't find that page! You can <Link href={'/'}><a>return home</a></Link> if you'd like.</p>
        </div>
      </main>
    </React.Fragment>;
  }
}
