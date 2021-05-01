const express = require('express');

const router = express.Router();
const bookBL = require('./bookBL');


router.route('/').get(async (req, resp) => {
    
    let bookArr = await bookBL.getAllBooks();
    return resp.json(bookArr);

}) 

router.route('/:id').get(async (req, resp) => {

    let currentId = req.params.id;
    let currentBook = await bookBL.getBook(currentId);
    return resp.json(currentBook);
})

router.route('/').post(async (req, resp) => {

    let newBook = req.body;
    let data = await bookBL.addBook(newBook)
    return resp.json(data)

})

router.route('/:id').put(async (req, resp) => {

    let id = req.params.id
    console.log(id)  
    let updatedData = req.body; 
    let answer = await bookBL.updateBook(id, updatedData);
    return resp.json(answer);

})

router.route('/:id').delete(async (req, resp) => {

    let id = req.params.id;
    let answer = await bookBL.deleteBook(id)
    return resp.json(answer)
})



module.exports = router; 