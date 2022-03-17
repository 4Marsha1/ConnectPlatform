const expressAsyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const connectDB = expressAsyncHandler(async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${db.connection.host}`.blue.underline);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
})

module.exports = connectDB