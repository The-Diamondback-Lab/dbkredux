import React from 'react';
import Link from 'next/link';

export default class DonateBar extends React.Component {
  render() {
    return (
      <div className='donate-bar'>
        Please support our journalism by <Link href='/donate'><a>Donating to The Diamondback.</a></Link>
      </div>
    )
  }
}