const express = require('express');
const connectDB = require('./config/db')

const port = process.env.PORT || 5000
const app = express();

// Connect to database
connectDB();

// Default Route
app.get('/', (req, res) => {
    res.send('Hello from server')
})

// Define Routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})