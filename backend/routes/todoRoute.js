const express = require('express');
const {getTodo, addTodo, updateTodoById, deleteTodoById} = require('../controllers/todoController')
const router = express.Router();

router.get('/', getTodo);
router.post('/', addTodo);
router.patch('/', updateTodoById);
router.delete('/', deleteTodoById)


module.exports = router;
