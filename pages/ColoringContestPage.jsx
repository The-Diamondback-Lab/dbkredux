import * as React from 'react'
import Head from 'next/head'
import ColoringContestContainer from '../components/custom/coloring-contest/ColoringContestContainer'

export default class ColoringContestPage extends React.Component {
  render() {
    return <React.Fragment>
      <Head>
        <title key='title'>Coloring Contest</title>
        <meta key='og:title' property='og:title' content='Coloring Contest' />
        <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='page'>
        <div className='container-narrow'>
          <h1 dangerouslySetInnerHTML={{ __html: 'Coloring Contest' }} />
        </div>
        <div className='container-narrow flex'>
          <div className='left-rail'>
            <hr />
            <div id='page-content'>
              <ColoringContestContainer />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  }
}
