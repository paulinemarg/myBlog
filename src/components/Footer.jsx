import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <Link 
      to='/impressum' 
      className='impressum'
      >
      impressum
      </Link>
      <small className='website-rights'>| paulinemarg© 2022</small>
    </div>
  );
}

export default Footer;
