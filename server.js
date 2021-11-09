const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


// Routes
const posts = require('./routes/api/posts')


// BODYPARSER
app.use(bodyParser.json());

// DB CONFIG
const db = require('./config/env').mongoURI

// CONNECT TO DB
mongoose
    .connect(db)
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/posts', posts);

// Update static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder path
    app.use(express.static('frontend/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`Server started on port ${port}`))
