import React from 'react';

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <div className="movie-card" onClick={() => onMovieSelect(movie)}>
      <img src={movie.image} alt={movie.name} />
      <h2>{movie.name}</h2>
      <p>{movie.year}</p>
    </div>
  );
};

export default MovieCard;
