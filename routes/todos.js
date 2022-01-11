const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/TodosController');
const checkAuth = require('../middleware/checkAuth');

// Show all todos
router.get('', TodosController.getTodos);

// Show todo
router.get('/:id', TodosController.getTodo);

// Add todo
router.post('', TodosController.addTodo);

// Update todo
router.put('/:id', TodosController.updateTodo);

// Delete todo
router.delete('/:id', TodosController.deleteTodo);

module.exports = router;
