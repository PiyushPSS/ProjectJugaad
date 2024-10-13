import React, { useEffect, useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    const pathname = window.location.pathname;

    useEffect(() => {
        if (pathname == '/') {
            setMenu('home');
        }
        
        // else if (pathname == '/chat') {
        //     setMenu("chat");
        // }

        else if (pathname == '/why-us') {
            setMenu("why-us");
        }
        
        else if (pathname == '/about') {
            setMenu("about-us");
        } else if (pathname == '/profile') {
            setMenu("profile");
        }
    })

    return (
        <div className='navbar'>
            {/* LOGO */}
            <Link to={'/'}><img src={assets.logo} alt='logo' className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to={'/'}><li className={menu === "home" ? "active" : ""} onClick={() => {
                    setMenu("home");
                }}>home</li></Link>

                {/* <Link to={'/chat'}><li className={menu === "chat" ? "active" : ""} onClick={() => {
                    setMenu("chat");
                }}>chat</li></Link> */}

                <Link to={'/why-us'}><li className={menu === "why-us" ? "active" : ""} onClick={() => {
                    setMenu("why-us");
                }}>why us</li></Link>

                <Link to={'/profile'}><li className={menu === "profile" ? "active" : ""} onClick={() => {
                    setMenu("profile");
                }}>profile</li></Link>

                <Link to={'/about'}><li className={menu === "about-us" ? "active" : ""} onClick={() => {
                    setMenu("about-us");
                }}>about us</li></Link>
            </ul>
            <div className='navbar-right'>
                <Link to={'/login'}><button>sign in</button></Link>
            </div>
        </div>
    )
}

export default Navbar