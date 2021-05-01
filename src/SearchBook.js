/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import utils from './utils'
import './SearchBook.css';
import BookInfo from './BookInfo'

class SearchBook extends Component {
    constructor(props) {
        super(props);
            this.state = {Books: [], display: []}
                
        

    } 
       async componentDidMount(){
            const search = await utils.getAllBooksData('http://localhost:3001/books')
            this.setState({Books: search.data})
            this.setState({display: search.data})

        }
        SearchBar = (e) => {
            let search = e.target.value.toLowerCase()
            let searchBook = this.state.Books.filter(x=> x.name.toLowerCase().search(search) != -1)
            this.setState({display: searchBook})
        }

        goBack = () => {
            this.props.history.push('/')
            
        }
      
    render() { 
        
        let searchBooks = this.state.display.map((Book) => {

            return (
            
               <li key={Book._id}> <BookInfo book={Book}  /> </li>
                
            )
        })

        return (
            <div style={{border: "black 5px solid", width: "50%"}}>
                
                    
                    <input type="search" placeholder="find your book" onChange={this.SearchBar} style={{margin:15, borderWidth: 5, borderColor: 'springgreen' }} />
                    <input style={{ borderTopLeftRadius: 35, borderBottomRightRadius: 35, backgroundColor: 'springgreen' }} type="button" value="Back" onClick={this.goBack}  />
                        
                    
                    <ul>
                    {searchBooks}
                    </ul>
                
            </div>
        );
    }
}

export default SearchBook;