import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-tabs sticky-top'>
      {/* <li className='title m-2'>Lucas Freigenberg</li> */}
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'pActive' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Portfolio'
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the pActive link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'pActive' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the pActive link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'pActive' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Resume'
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is 'Resume'
          // If it is, we set the current page to 'nav-link-pActive', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'pActive' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;