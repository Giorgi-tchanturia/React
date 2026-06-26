import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [bookmarkedTitles, setBookmarkedTitles] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  //API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  
  // Bookmarks-ის განახლება LocalStorage-ში
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedTitles));
  }, [bookmarkedTitles]);

  // Bookmark-ის დამატება/წაშლა
  const toggleBookmark = (title) => {
    setBookmarkedTitles((prev) => 
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <MovieContext.Provider value={{ movies, bookmarkedTitles, toggleBookmark }}>
      {children}
    </MovieContext.Provider>
  );
};