const mongoose = require('mongoose')
let bookSchema = mongoose.Schema;

let book = new bookSchema({
    name : String,
    pages : Number,
    author : String
}) 

module.exports = mongoose.model('books', book)
 