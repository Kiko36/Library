import React, { Component } from 'react';
import utils from './utils';
import './allBooks.css';
 

class allBooks extends Component {
    constructor(props) {
        super(props);
            this.state = { Books: [] }
    }
    async componentDidMount() {
        let books = await utils.getAllBooksData('http://localhost:3001/books')
            this.setState({Books: books.data})
            localStorage.setItem('books',JSON.stringify(books.data))
    }
    async componentDidUpdate(prevProps, prevState) {
        if(this.state === prevState) {
            let books = await utils.getAllBooksData('http://localhost:3001/books')
            this.setState({Books: books.data})

        }
    } 
    searchBook = () => {
        this.props.history.push('/searchBook')
    }

    addNewBook = () => {
        this.props.history.push('/add')
    }

    Delete = async(id) => {
        this.deleteBook = await utils.deleteBook(`http://localhost:3001/books/${id}`)
            this.props.history.push('/')
    }

    Edit = (id) => {
        this.props.history.push(`/editBook/${id}`)
    }
    render() {
        let EditBook = this.state.Books.map((Book) => {
            return  <tr key={Book._id}>
                        <td>{Book.name}</td>
                        <td><input type="button" value="Edit" onClick={()=>this.Edit(Book._id)} /></td>
                        <td><input type="button" value="Delete" onClick={()=>this.Delete(Book._id)} /></td>
                    </tr>
        })

        return (
            <div className="container">
                <input type="button" value="search" onClick={this.searchBook} />
                <input type="button" value="Add" onClick={this.addNewBook} />
                <h1 style={{textAlign: 'center', }}>Welcome To The Book Wizard</h1>
                <table border="2" >
                    <tbody>
                        {EditBook}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default allBooks;