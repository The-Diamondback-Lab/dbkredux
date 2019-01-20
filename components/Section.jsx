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
    this.state = { ads: [], loaded: false };
  }

  componentWillMount() {
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

    return (
      <section className={section_type} id={`section-${category.slug}`}>
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
