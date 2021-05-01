const book = require('./bookSchema')

const getAllBooks = () => {
    return new Promise((resolve) => {
        book.find({}, (err, data) => {
            if(err){
                console.log(err);
            }
            else {
                resolve(data);
            }
        }) 
    })
}

const getBook = (bookId) => {
    return new Promise ((resolve, reject) => {
        book.findById(bookId, (err, Data) => {
            if(err){
                reject(err);
            }
            else {
                resolve(Data);
            }
        })
    })
}

const addBook = (newData) => {
    return new Promise((resolve) => {
        let newBook = new book({
            name: newData.name,
            pages: newData.pages,
            author: newData.author
        })

        newBook.save((err) => {
            if(err){
                console.log(err);
            }
                        
        })
        resolve("book created")
    })
}

const updateBook = (bookId, updateData) => {
    return new Promise((resolve, reject) => {
        book.findByIdAndUpdate(bookId, 
        {     name: updateData.name,
              pages: updateData.pages,
              author: updateData.author  
        }, (err) => {
            if(err){
                reject(err)
            }
            else {
                resolve("book updated")
            }
        })
    })
}

const deleteBook = (id) => {
    return new Promise((resolve, reject) => {
        book.findByIdAndDelete(id, (err) => {
            if(err){
                reject(err)
            }
            else {
                resolve("book deleted")
            }
        })
    })
}

module.exports = { getAllBooks, getBook, addBook, updateBook, deleteBook }