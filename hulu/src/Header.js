import React from 'react';
import './header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {

    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    return (
        <div className = 'header'>
            
            <div className = 'header_icons'>
                <div className = 'header_icon header_icon--active' onClick = {topScroll}>
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className = 'header_icon'>
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>
                <div className = 'header_icon'>
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>
                <div className = 'header_icon'>
                    <VideoLibraryIcon/>
                    <p>Collections</p>
                </div>
                <div className = 'header_icon'>
                    <SearchIcon/>
                    <p>Search</p>
                </div>
                <div className = 'header_icon'>
                    <PersonOutlineIcon/>
                    <p>Account</p>
                </div>
            </div>
            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png' alt = 'hulu'/>
        </div>
    )
}

export default Header
