/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getAllBooksData = (url) => {
    return axios.get(url)
}

const getBookById = (url, id) => {
    return axios.get(url, id)
}

const addBook = (url, obj) => {
    return axios.post(url, obj)
}

const updateBook = (url, id, obj) => {
    return axios.put(url, id, obj)
}

const deleteBook = (url, id) => {
    return axios.delete(url, id)
}

export default { getAllBooksData, getBookById, addBook, updateBook, deleteBook }