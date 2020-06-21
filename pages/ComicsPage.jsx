import * as React from 'react'
import Head from 'next/head'

export default class ComicsPage extends React.Component {
  render() {
    return <Head>
      {/* TODO Need an actual URL? */}
      { /* eslint-disable-next-line react/self-closing-comp */ }
      <script src='https://<production url TBD>/dist/ck-embed.js' data-ckembed='1' async></script>
    </Head>
  }
}
