/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */

import * as React from 'react';

// components
import Advertisement from '../components/Advertisement.jsx';
import Articles from '../components/Articles.jsx';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    const { ads } = this.props;

    if (ads) {
      this.setState(
        { ads: ads.map((a, i) => <Advertisement {...a} key={i} />) }
      );
    }

    this.setState({ loaded: true });
  }

  render() {
    const { ads, loaded } = this.state;
    const { category, max, section_type } = this.props;

     // list of classes for this article section
     let classes = [section_type];
     // add certain classes if we have ads
     if (this.props.ads) {
       // if it has a single banner C ad, put it on the right side
       // if it has two banner B ads, put it on the left side

       let ads = this.props.ads;

       if (ads.every(adObj => /^\d+x\d+_Banner_C$/.test(adObj.path)) && ads.length === 1) {
         classes.push('with-ads-right');
       } else if (ads.every(adObj => /^\d+x\d+_Banner_B$/.test(adObj.path)) && ads.length === 2) {
         classes.push('with-ads-left');
       }
     }

     return (
       <section className={classes.join(' ')} id={`section-${category.slug}`}>
         {/* section heading */}
         <h2 dangerouslySetInnerHTML={{ __html: category.name }} />
        {
          this.props.ads && loaded
            ? (
              <div className='articles-with-ads'>
                {/* section articles */}
                <Articles category={category} max={max} />

                <div>
                  {
                    /* advertisement(s) */
                    ads.map(ad => ad)
                  }
                </div>
              </div>
            )
            : <Articles category={category} max={max} section={section_type} />
        }
      </section>
    );
  }
}
