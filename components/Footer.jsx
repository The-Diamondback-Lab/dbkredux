import React from 'react'

// react router
import { Link } from '../routes'

/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */

/**
 * Footer class. Renders the footer The footer contains the mega menu (with
 * links to all categories), contact information, the stay connected menu, and
 * copyright.
 */
export default class Footer extends React.Component {
  /**
   * This function takes a category title as an argument and returns it
   * lowercase with spaces replaced by dashes.
   *
   * ex: Other Links will becomes other-links.
   *
   * @param {string} title category title
   * @return {string} category title lowercase with spaces replaced by dashes
   */
  getColumnId(title) {
    return `footer-column-${title.toLowerCase().replace(' ', '-')}`
  }

  /**
   * Renders the footer. The footer contains the mega menu (with links to all
   * categories), contact information, the stay connected menu, and copyright.
   */
  render() {
    const { footer, social } = this.props
    if (footer === null || social === null) {
      return ''
    }
    return (
      <footer>
        <div className='container'>
          {/* categories */}
          <p className='footer-title'>Categories</p>
          <div className='categories row'>
            {
              footer.items.map((category, index) => {
                const id = `column-${category.id}`

                return (
                  <ul className='footer-column' id={id} key={id}>
                    <Link href={category.url}>
                      <a className={category.classes}>{category.title}</a>
                    </Link>
                    <div className='sub-links'>
                      {category.children.map((link, i) =>
                        <li key={`link-${i}`}><FooterLink {...link} /></li>
                      )}
                    </div>
                  </ul>
                )
              }
              )
            }
          </div>

          {/* contact info */}
          <div className='contact'>
            <p className='title-link'>
              Contact Us
            </p>
            <a href='https://goo.gl/maps/14QKBBK8x1v' target='_blank' rel='noopener noreferrer'>
              <address>
                3150 South Campus Dining Hall<br />
                University of Maryland<br />
                College Park, MD 20742<br />
              </address>
            </a>
            <br />

            <p className='contact-phone'>
              <span>Newsroom</span>:{' '}
              <a href='tel:+3013148200'>301-314-8200</a><br />
              <span className='hours'>
                (4:30 p.m. to midnight, Sundays through Thursdays)
              </span>
            </p>

            <p className='contact-phone'>
              <span>Advertising</span>:{' '}
              <a href='tel:+3013148000'>301-314-8000</a><br />
              <span className='hours'>
                (normal business hours, Mondays through Fridays)
              </span>
            </p>
          </div>

          {/* social links and copyright */}
          <div className='stay-connected-copyright row'>
            <div className='stay-connected'>
              <p>Stay Connected</p>
              {social.items.map((link, i) => <FooterLink {...link} key={i} />)}
            </div>

            <Link href='/'><a className='copyright'>&copy; {new Date().getFullYear()} The Diamondback</a></Link>
          </div>

          <div className='notice'>
            The Diamondback is published by <a href='http://marylandmedia.org/' target='_blank' rel='noopener noreferrer'>Maryland Media, Inc</a> a non-profit corporation
          </div>
        </div>
      </footer>
    )
  }
}

/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
 * @param {object} props link properties - url, classes, title and type
 * @return {Link} footer link
 */
const FooterLink = (props) => {
  if (props.type === 'custom') {
    return (
      <a
        className={props.classes}
        href={props.url}
        target='_blank'
        rel='noopener noreferrer' >
        {props.title}
      </a>
    )
  }
  return (
    <Link href={props.url}><a className={props.classes}>{props.title}</a></Link>
  )
}
