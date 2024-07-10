const express = require('express');
const {
  getMovies,
  addMovie,
  deleteMovie,
  searchMovies,
  sortMovies,
  updateMovie,
} = require('../controllers/movieController');

const router = express.Router();

router.route('/').get(getMovies).post(addMovie);
router.route('/:id').put(updateMovie).delete(deleteMovie);

router.get('/search', searchMovies);
router.get('/sort', sortMovies);

module.exports = router;
