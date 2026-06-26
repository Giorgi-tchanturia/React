import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import iconBookmarkForCard from '../assets/BookmarkForCard.svg'
import iconFavBookmarkForCard from '../assets/FavBookmarkForCard.svg'
import iconTv from '../assets/Tv.svg'
import iconMovie from '../assets/MovieLent.svg'

const MovieCard = ({ item }) => {
  const { bookmarkedTitles, toggleBookmark } = useContext(MovieContext);
  const isBookmarked = bookmarkedTitles.includes(item.title);

  return (
    <div className="card">
      <div className="thumbnail-wrapper">
        <img 
          src={item.thumbnail.regular.medium} 
          alt={item.title} 
          className="thumbnail"
        />
        <button 
          className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={() => toggleBookmark(item.title)}
        >
          {isBookmarked ? (
            <img src={iconFavBookmarkForCard} alt="Bookmarked" />
          ) : (
            <img src={iconBookmarkForCard} alt="Not bookmarked" />
          )}
        </button>
      </div>
      <div className="info">
        <span>{item.year}</span>
        <span className="dot">•</span>
        
       
        <span className="category-details">
          <img 
            src={item.category === 'Movie' ? iconMovie : iconTv} 
            alt={item.category} 
            className="category-icon"
          />
          {item.category}
        </span>

        <span className="dot">•</span>
        <span>{item.rating}</span>
      </div>
      <h3 className="title">{item.title}</h3>
    </div>
  );
};

export default MovieCard;