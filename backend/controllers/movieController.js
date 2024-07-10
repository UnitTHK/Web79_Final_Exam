const Movie = require('../models/Movie');
const asyncHandler = require('express-async-handler');

const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

const addMovie = asyncHandler(async (req, res) => {
    const { name, time, year, image, introduce } = req.body;
    const movie = new Movie({ name, time, year, image, introduce });
    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
});

const updateMovie = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, time, year, image, introduce } = req.body;
    const movie = await Movie.findById(id);

    if (!movie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    movie.name = name;
    movie.time = time;
    movie.year = year;
    movie.image = image;
    movie.introduce = introduce;

    const updatedMovie = await movie.save();
    res.json(updatedMovie);
});

const deleteMovie = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    await movie.remove();
    res.json({ message: 'Movie removed' });
});

const searchMovies = asyncHandler(async (req, res) => {
    const { keyword } = req.query;
    const searchCondition = keyword ? { name: { $regex: keyword, $options: 'i' } } : {};
    const movies = await Movie.find(searchCondition);
    res.json(movies);
});

const sortMovies = asyncHandler(async (req, res) => {
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    const movies = await Movie.find().sort({ year: sortOrder });
    res.json(movies);
});

const uploadImage = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400);
        throw new Error('Image upload error');
    }

    res.status(201).json({
        imagePath: `/uploads/${req.file.filename}`,
    });
});

module.exports = { getMovies, addMovie, updateMovie, deleteMovie, searchMovies, sortMovies, uploadImage };