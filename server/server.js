const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require('./database')


let app = express();
app.use(cors());


const bookController = require('./bookController')

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.use("/books",bookController)


app.listen(3001, () => {
    console.log('server is running');
})
