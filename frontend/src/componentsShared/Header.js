import React from 'react';
import logo from '../assets/images/logo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import './Header.css';

const Header = () => {

    // console.log({logo});
    return (
        <header>
            <div id='header'>
                <div className='logo'>
                    <a href='/'><img src={logo} alt='logo du site web'></img></a>
                    <SearchBar></SearchBar>
                </div>
                <div className='headerButton'>
                    <LoginButton></LoginButton>
                </div>
            </div>
        </header>
    )
};

export default Header;