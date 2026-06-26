import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import MovieCard from './MovieCard';
import iconSearch from '../assets/SearchIcon.svg' 

const MainContent = () => {
  const { movies } = useContext(MovieContext);
  const tvSeries = movies.filter(m => m.category === 'TV Series');

  return (
    <main className="main-content">
      <div className="search-bar">
        <span>
          <img src={iconSearch} alt="Search" />
        </span>
        <input type="text" placeholder="Search for TV series" />
      </div>
      <h2>TV Series</h2>
      <div className="grid">
        {tvSeries.map((item) => (
          <MovieCard key={item.title} item={item} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;