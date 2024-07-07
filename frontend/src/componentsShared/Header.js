import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import './Header.css';
import { getGamesBySearch } from '../api/games';

const Header = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (value) => {
        setSearchValue(value);
        onSearch(value);
    };

    return (
        <header>
            <div id='header'>
                <div className='logo'>
                    <a href='/'><img src={logo} alt='logo du site web'></img></a>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </div>
                <div className='headerButton'>
                    <LoginButton></LoginButton>
                </div>
            </div>
        </header>
    )
};

export default Header;