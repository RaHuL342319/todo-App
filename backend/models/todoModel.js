const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoData:{
        type: String,
        require: [true, 'Required todoData'],
        unique: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

const todoModel = mongoose.model("todos", todoSchema);

module.exports= {
    todoModel
};