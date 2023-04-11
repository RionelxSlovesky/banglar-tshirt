import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='primary-nav'>
                <Link className='primary-nav-items' to='/'>Home</Link>
                <Link className='primary-nav-items' to='/review'>Order Review</Link>
                <Link className='primary-nav-items' to='/about'>About</Link>
                <Link className='primary-nav-items' to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;