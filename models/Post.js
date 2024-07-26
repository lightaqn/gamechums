const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: Date.now,
    } 
}) 

module.exports = Post = mongoose.model('post', PostSchema);