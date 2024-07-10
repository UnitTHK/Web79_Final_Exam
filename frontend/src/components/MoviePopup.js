import React from 'react';

const MoviePopup = ({ movie, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={movie.image} alt={movie.name} />
        <h2>{movie.name}</h2>
        <p>Duration: {movie.time} minutes</p>
        <p>Year: {movie.year}</p>
        <p>{movie.introduce}</p>
      </div>
    </div>
  );
};

export default MoviePopup;
