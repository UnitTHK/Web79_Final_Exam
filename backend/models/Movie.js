const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    time: { type: Number, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    introduce: { type: String, required: true }
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
