// react
import * as React from 'reactn';
import { Link } from '../routes';
import Head from 'next/head';
import Parser from 'html-react-parser';

import ErrorPage from './ErrorPage.jsx';

import $ from 'jquery';

// components
import RelatedContent from '../components/RelatedContent.jsx';
import Advertisement from '../components/Advertisement.jsx';

import {
  request, parseDate, loadImage, processArticleBody, injectArticleAds
} from '../utilities/app.utilities.js';


/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

export default class ArticlePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scriptjsLoaderEnabled: false };
  }

  static async getInitialProps({ query }) {
    var article_data = null;
    try {
      article_data = await request(`/articles/${query.slug}`);
      article_data = parseDate(article_data);

      //choose how to display dates for the article
      if (article_data.date.ago.updated.days <= 10) {
        if (article_data.date.ago.updated.hours < 24) {
          if (article_data.date.ago.updated.hours === 0) {
            article_data.date.updated = "today";
          }
          else if (article_data.date.ago.updated.hours === 1) {
            article_data.date.updated = article_data.date.ago.updated.hours + " hour ago";
          }
          else {
            article_data.date.updated = article_data.date.ago.updated.hours + " hours ago";
          }
        }
        else if (article_data.date.ago.updated.days === 1) {
          article_data.date.updated = article_data.date.ago.updated.days + " day ago";
        }
        else {
          article_data.date.updated = article_data.date.ago.updated.days + " days ago";
        }
      }
    } catch (error) {
      return {
        article: null
      };
    }
    return {
      article: article_data
    };
  }

  async componentDidUpdate() {
    if (document.getElementById('article-text') !== null) {
      processArticleBody(document.getElementById('article-text'));
    }
  }

  componentDidMount() {
    this.setState({ scriptjsLoaderEnabled: true });
  }

  injectArticleAds(content) {
    var parsed = Parser(content);
    var ad1 = <React.Fragment key={parsed.length + 1}>
      <Advertisement path="300x250_Mobile_InStory_Top" size={[300, 250]} mode="mobile"></Advertisement>
      <Advertisement path="300x250_Desktop_InStory_Top" size={[300, 250]} mode="desktop"></Advertisement>
    </React.Fragment>;

    var ad2 = <React.Fragment key={parsed.length + 2}>
      <Advertisement path="300x250_Mobile_InStory_Bottom" size={[300, 250]} mode="mobile"></Advertisement>
      <Advertisement path="300x250_Desktop_InStory_Bottom" size={[300, 250]} mode="desktop"></Advertisement>
    </React.Fragment>;

    var output = [];
    var paragraphs = 0;
    var ad1Pushed = false;
    var ad2Pushed = false;
    parsed.forEach(e => {
      output.push(e);
      if (typeof e === 'object' && e.type === 'p') {
        paragraphs++;
      }
      if (paragraphs === 2 && !ad1Pushed) {
        output.push(ad1);
        ad1Pushed = true;
      }
      if (paragraphs === 6 && !ad2Pushed) {
        output.push(ad2);
        ad2Pushed = true;
      }
    });

    return output;
  }

  generateCategories(categoryList) {
    return categoryList.map((cat) => (
      <Link href={cat.link} key={cat.id}><a>{Parser(cat.name)}</a></Link>));
  }

  render() {
    const { article } = this.props;
    if (!article) {
      return <ErrorPage />;
    }

    //injects article ads after window loads
    var article_body = <div id='article-text-before' className='article-text before-js' dangerouslySetInnerHTML={{ __html: article.content.rendered }}></div>;
    var article_body_ads = "";
    if (this.state.scriptjsLoaderEnabled) {
      $("#article-text-before").hide();
      article_body_ads = <div id='article-text' className='article-text after-js'>
        {injectArticleAds(article.content.rendered)}
      </div>;
    }

    return (
      <React.Fragment>
        <Head>
          <title>{article.title + " - The Diamondback  "}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script async src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c418704770faa57"></script>
        </Head>
        <main className='page article-page'>
          <div className='container-narrow flex'>
            <div className='left-rail'>
              <h2 className='category'>{this.generateCategories(article.categories)}</h2>
              <h1>{article.title}</h1>
              <div className='details'>
                <span className='accent author'><Link href={article.author.link}><a>{article.author.name}</a></Link></span>
                <span className='dot'>·</span>
                <span>Published {article.date.formatted}</span>
                <span className='dot'>·</span>
                <span>Updated {article.date.updated}</span>
              </div>
              <div className="addthis_inline_share_toolbox"></div>
              <div className='image-area'>
                <img
                  alt='Article Image'
                  className='article-image'
                  id={"image-" + article.id} src={article.featured_image.url}
                  onLoad={() => (loadImage("image-" + article.id))} />
              </div>
              <span className='article-caption' dangerouslySetInnerHTML={{ __html: article.featured_image.caption }}></span>
              {article_body}
              {article_body_ads}
            </div>
            <div className='right-rail'>
              <br />
              <br />
              <Advertisement path='300x250_Banner_B' size={[300, 250]} mode="desktop" />
              <br />
              <Advertisement path='300x600_Banner_C' size={[300, 600]} mode="desktop" />
            </div>
          </div>
          <div className='container-narrow'>
            <RelatedContent categories={article.categories} story_id={article.id}></RelatedContent>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
