const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/todoRoute');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log("Error connecting to MongoDB "+ err)
}) 


app.use('/api/todo', route)

app.listen(PORT,() => {
    console.log(`LIstening on: ${PORT}`);
});