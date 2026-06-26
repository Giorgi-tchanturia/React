import React from 'react';
import logoImg from '../assets/Logo.svg'
import iconHome from '../assets/Shape.svg'
import iconMovies from '../assets/MovieLent.svg'
import iconTv from '../assets/Tv.svg'
import iconBookmar from '../assets/Bookmark.svg'

const Sidebar = () => (
  <nav className="sidebar">
    <div className="logo">
      <img src={logoImg} alt="Entertainment App Logo" />
    </div>
  
    <div className="nav-links">
      <span className="icon">
        <img src={iconHome} alt="Home" />
      </span>

      <span className="icon">
        <img src={iconMovies} alt="Movies" />
      </span>
      <span className="icon active">
        <img src={iconTv} alt="TV Shows" />
      </span>
      <span className="icon">
        <img src={iconBookmar} alt="Bookmarks" />
      </span>
    </div>
    <div className="avatar">
      <img src="https://i.pravatar.cc/150?img=11" alt="user avatar" />
    </div>
  </nav>
);

export default Sidebar;