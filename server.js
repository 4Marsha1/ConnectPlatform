const express = require("express");
const colors = require('colors');
const cors = require('cors');
const config = require('config')
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware')

const PORT = process.env.PORT || 5000;
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
app.use('/api/profile/', require('./routes/profileRoutes'));
app.use('/api/posts/', require('./routes/postRoutes'));

// CUSTOM ERROR HANDLER
app.use(errorHandler);

// SETTING APP
app.listen(PORT, () => console.log(`Server Listening at PORT ${PORT}`.cyan.underline));