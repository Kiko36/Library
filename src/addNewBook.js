import React, { Component } from 'react';
import utils from './utils'

class AddBook extends Component{
    constructor(props){
        super(props)
        this.state = {name:'', pages:0, author:''}
    }

    addNewBook = async() => {
        let obj = this.state
        const addBook = await utils.addBook('http://localhost:3001/books', obj)
        this.props.history.push('/')
    }
    nameBooks = (e) => {
        let name = e.target.value
        this.setState({name: name})
    }
    pagesBooks = (e) => {
        let pages = e.target.value 
        this.setState({pages: pages})
    }
    authorBooks = (e) => {
         let author = e.target.value
         this.setState({author: author})  
    }

    render(){
        return (
            <div>
               Name: <input type="text" onChange={this.nameBooks} /><br />
               Pages: <input type="text" onChange={this.pagesBooks} /><br />
               Author: <input type="text" onChange={this.authorBooks} /><br />
                <input type="button" value="Add" onClick={this.addNewBook} />
            </div>
        )
    }
}

export default AddBook

