import React, { useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='logo' className='logo' />
            <ul className='navbar-menu'>
                <li className={menu === "home" ? "active" : ""} onClick={() => {
                    setMenu("home");
                }}>home</li>

                <li className={menu === "chat" ? "active" : ""} onClick={() => {
                    setMenu("chat");
                }}>chat</li>

                <li className={menu === "profile" ? "active" : ""} onClick={() => {
                    setMenu("profile");
                }}>profile</li>

                <li className={menu === "about-us" ? "active" : ""} onClick={() => {
                    setMenu("about-us");
                }}>about us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-chat-icon'>
                    <img src={assets.basket_icon} alt="" />
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar