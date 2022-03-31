import React from 'react';
import'./Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
                <div className="navigator">
                    <a href='/'>Home</a>
                    <a href='/shop'>Shop</a>
                    <a href='/contact'>Contact</a>
                    <a href='/blog'>Blog</a>
                    <a href='/order'>Order</a>
                </div>
            </nav>
        
        </div>
    );
};

export default Header;