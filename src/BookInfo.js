import React, { useState } from 'react';


function BookInfo(props) {

const [showBookMoreDetails, setShowBookMoreDetails] = useState(false)



        return (
            <div>
                                
                   <div onClick={()=>setShowBookMoreDetails(!showBookMoreDetails)}><strong>Name: </strong> {props.book.name}</div><br/>
                    {showBookMoreDetails && <div>
                    <strong>Pages:</strong> {props.book.pages}<br />
                    <strong>Author:</strong> {props.book.author}<br />
                    </div>}
            </div>
        ) 

}

export default BookInfo;