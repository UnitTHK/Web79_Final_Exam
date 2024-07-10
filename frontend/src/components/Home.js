import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import MoviePopup from "./MoviePopup";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch('api/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
            {selectedMovie && <MoviePopup movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
        </div>
    );
};

export default Home;
