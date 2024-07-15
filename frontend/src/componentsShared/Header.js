import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import './Header.css';
import { getGamesBySearch } from '../api/games';
import { useAuth } from '../contexts/AuthContext';
import LogoutButton from './LogoutButton';
import UserIcon from './UserIcon';

const Header = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    const {isAuthenticated} = useAuth;
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
                    {isAuthenticated ? (
                        <>
                            <UserIcon></UserIcon>
                            <LogoutButton></LogoutButton>
                        </>
                    ) : (
                        <LoginButton></LoginButton>
                    )}
                </div>
            </div>
        </header>
    )
};

export default Header;