const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const todoController = require('../controllers/todoController');

router.use(authenticate);
router.get('/', todoController.getTodos);
router.post('/', todoController.addTodo);
router.put('/:id', authorize, todoController.updateTodo);
router.delete('/:id', authorize, todoController.deleteTodo);

module.exports = router;