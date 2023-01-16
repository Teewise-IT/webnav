/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './body.css';

const Body = ({setShowSubmenu}) => {
  return (
    <div className='welcome' onClick={() => setShowSubmenu(false)}>
      <h1 className='body-text'>Welcome To Teewise.com</h1>
      <a href="#" className="get-started">Get Started</a>
    </div>
  )
}

export default Body