const express = require('express');
const mongoose = require('mongoose')

const port = process.env.PORT || 5000
const app = express();
const mongoURI = 'mongodb+srv://4Marsha1:test1234@connectplatform.vfarl.mongodb.net/ConnectPlatform?retryWrites=true&w=majority'

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Successfully Connected database');
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    })

app.get('/', (req, res) => {
    res.send('Hello from server')
})
