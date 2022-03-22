const express = require("express");
const colors = require('colors');
const cors = require('cors');
const config = require('config')
const path = require('path')
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware')

const PORT = process.env.PORT || 5000;
const app = express();

// CONNECT TO DATABASE
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users/', require('./routes/userRoutes'));
app.use('/api/profile/', require('./routes/profileRoutes'));
app.use('/api/posts/', require('./routes/postRoutes'));

// FOR PRODUCTION
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// CUSTOM ERROR HANDLER
app.use(errorHandler);

// SETTING APP
app.listen(PORT, () => console.log(`Server Listening at PORT ${PORT}`.cyan.underline));