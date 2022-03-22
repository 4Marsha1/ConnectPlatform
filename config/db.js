const expressAsyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const config = require('config')
const uri = config.get("MONGO_URI")

const connectDB = expressAsyncHandler(async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log(`MongoDB connected ${db.connection.host}`.blue.underline);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
})

module.exports = connectDB