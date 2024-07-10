const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

const { PORT = 5000 } = process.env;

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

app.use('/uploads', express.static('uploads'));


app.listen(PORT, console.log(`Server running on port ${PORT}`));