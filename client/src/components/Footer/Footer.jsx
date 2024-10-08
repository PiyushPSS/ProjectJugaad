import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_white} alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur explicabo nostrum quae ipsam sapiente, quaerat repudiandae. Nam distinctio, voluptates molestias obcaecati officiis explicabo consequuntur nobis sint quia alias doloremque, ex delectus voluptatum excepturi?</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook logo" />
            <img src={assets.twitter_icon} alt="Twitter logo" />
            <img src={assets.linkedin_icon} alt="LinkedIn logo" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>Address: 1234 Street Name, City Name, United States</li>
            <li>Phone: +123456789</li>
            <li>Email: piyush@projectjugaad.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Project Jugaad. Made with <span role="img" aria-label="heart emoji">❤️</span> by Jugaad Team
      </p>
    </div>
  )
}

export default Footer