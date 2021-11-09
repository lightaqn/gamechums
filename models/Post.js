const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: Date.now,
    } 
}) 

module.exports = mongoose.model('post', PostSchema);