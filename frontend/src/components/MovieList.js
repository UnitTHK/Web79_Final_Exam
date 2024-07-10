import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.ID} movie={movie} onMovieSelect={onMovieSelect} />
      ))}
    </div>
  );
};

export default MovieList;
