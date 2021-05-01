/* eslint-disable no-useless-constructor */
import React from 'react';
import { Switch, Route } from "react-router-dom";
import allBooks from './allBooks';
import AddNewBook from "./addNewBook";
import EditBook from "./EditBook";
import SearchBook from "./SearchBook";

export default class PlaceHolder extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={allBooks} />
                    <Route path="/add" component={AddNewBook} />
                    <Route path="/editBook/:id" component={EditBook} />
                    <Route path="/searchBook" component={SearchBook} />
                </Switch>
            </div>
        )
    }
}