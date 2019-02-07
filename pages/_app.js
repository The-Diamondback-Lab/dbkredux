// react
import * as React from 'reactn';
import Head from 'next/head';
import NoSSR from 'react-no-ssr';
import App, { Container } from 'next/app'

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Advertisement from '../components/Advertisement.jsx';
import Takeover from '../components/Takeover.jsx';
import Sidekick from '../components/Sidekick.jsx';

import { request } from '../utilities/app.utilities.js';

//sass
import '../styles/sass/app.sass';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      
      let footer = await request('/menu/footer');
      let social = await request('/menu/stay-connected');  
      let header = await request('/menu/header');
      let description = "The Diamondback is the independent student-run newspaper at the University of Maryland. The Diamondback is updated online daily and can be accessed at dbknews.com. In print, it is published weekly on Thursday and is available at dozens of locations throughout the campus and around College Park.";

      return {
          pageProps,
          menus: {
              footer: footer,
              social: social,
              header: header
          },
          description
      }
    }

    render () {
      const { Component, pageProps, menus, description } = this.props
  
      return (
        <Container>
            <Head>
                <title>The Diamondback</title>
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                <meta name="description" content={description} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="The Diamondback" />
                <meta property="og:description" content={description} />

                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <NoSSR>
                <Takeover />
            </NoSSR>
                <Header menu={menus.header}/>
                <Advertisement path='728x90_Banner_A' size={[728, 90]} mode="desktop" />
                <Advertisement path='300x50_Mobile_Header' size={[300, 50]} mode="mobile" />
            <Component {...pageProps} />
                <Advertisement path='300x50_Mobile_Footer' size={[300, 50]} mode="mobile" />
                <Advertisement path='728x90_Banner_E' size={[728, 90]} mode="desktop" />
                <Footer footer={menus.footer} social={menus.social} />
            <NoSSR>
                <Sidekick />
            </NoSSR>
        </Container>
      );
    }
  }