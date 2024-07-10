const mongoose = require('mongoose');

const connectDB = async () => {
    const { MONGO_URI } = process.env;
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Connected to database`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;