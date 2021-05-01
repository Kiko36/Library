/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import utils from './utils'

function EditBook (props) {

        const [Name, setName] = useState('')
        const [Pages, setPages] = useState('')
        const [Author, setAuthor] = useState('')

        useEffect(async ()=>{
            let id = props.match.params.id
            let book = await utils.getBookById(`http://localhost:3001/books/${id}`)
            let data = book.data
            setName(data.name)
            setPages(data.pages)
            setAuthor(data.author)
        },[]) 

        const EditBook = async() => {
            let id = props.match.params.id
            let obj = 
            {
                name: Name,
                pages: Pages,
                author: Author
            }
            let data = await utils.updateBook(`http://localhost:3001/books/${id}`, obj)    
            props.history.push('/')

        }
    return (

        <div>
            <h1>Edit Book</h1>
            Name: <input type="text" value={Name} onChange={e=>{setName(e.target.value)}} /><br />
            Pages: <input type="text" value={Pages} onChange={e=>{setPages(parseInt(e.target.value))}} /><br />
            Author: <input type="text" value={Author} onChange={e=>{setAuthor(e.target.value)}} /><br />
            <input type="button" value="Update" onClick={EditBook} />

        </div>
    );
    
}
export default EditBook;