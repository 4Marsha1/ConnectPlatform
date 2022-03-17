const express = require("express");
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware')

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 5000;
const app = express();

// CONNECT TO DATABASE
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// TEST Route
app.get('/', (req, res) => {
    res.send('Test')
})

// ROUTES
app.use('/api/users/', require('./routes/userRoutes'));
app.use('/api/profile/', require('./routes/profileRoutes'))

// CUSTOM ERROR HANDLER
app.use(errorHandler);

// SETTING APP
app.listen(port, () => console.log(`Server Listening at port ${port}`.cyan.underline));