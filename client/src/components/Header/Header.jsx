import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

let userData = localStorage.getItem('userData');

userData = JSON.parse(userData);

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Life's too short to own. Live it <u>shared</u>.</h2>
        <p>Join us now and be part of the sustainable future.</p>

        <Link to={userData ? '/addRequest' : '/signup'}><button>{userData ? "Add a New Request" : "Create Your Account"}</button></Link>
      </div>
    </div>
  )
}

export default Header