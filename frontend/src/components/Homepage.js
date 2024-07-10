import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch('/api/movies');
    const data = await response.json();
    setMovies(data.results); // assuming the data you need is in the 'results' property
  };

  return (
      <div>
        {movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.image} alt={movie.title} />
            </div>
        ))}
      </div>
  );
};

export default Homepage;
