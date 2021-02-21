const { Todo, User } = require('../models/index');

class todoController {
  static async getTodos(req, res, next) {
    const UserId = +req.decoded.id;
    try {
      let todos = await Todo.findAll({ where: { UserId }, order: [['id', 'ASC']], include: [User] });
      let output = [];
      todos.forEach(todo => {
        output.push({
          id: todo.id,
          title: todo.title,
          description: todo.description,
          status: todo.status,
          due_date: todo.due_date,
          UserId: todo.UserId
        })
      })
      res.status(200).json(output);
    } catch(err) {
      next(err);
    }
  }

  static async addTodo(req, res, next) {
    const { title, description, status, due_date } = req.body;
    const UserId = +req.decoded.id;
    try {
      let newTodo = await Todo.create({ title, description, status, due_date, UserId });
      res.status(201).json({
        id: newTodo.id,
        title,
        description,
        status,
        due_date,
        UserId
      })
    } catch(err) {
      next(err);
    }
  }

  static async updateTodo(req, res, next) {
    let id = +req.params.id;
    let { title, description, status, due_date } = req.body;
    try {
      let updatedTodo = await Todo.update({ title, description, status, due_date }, { where: { id }, returning: true});
      if (updatedTodo) {
        res.status(200).json({
          id,
          title,
          description,
          status,
          due_date
        })
      } else {
        throw {
          name: 'CustomError',
          msg: 'ID not found!',
          status: 404
        }
      }
    } catch(err) {
      next(err);
    }
  }

  static async deleteTodo(req, res, next) {
    let id = +req.params.id;
    try {
      let todo = await Todo.findByPk(id);
      if (todo) {
        Todo
        .destroy({ where: { id } })
        .then(res.status(200).json({ 
          deletedData: {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            status: todo.status,
            due_date: todo.due_date
        }, 
        message: 'Data successfully deleted!'
      }))
      } else {
        throw {
          name: 'CustomError',
          msg: 'ID not found!',
          status: 404
        }
      }
    } catch(err) {
      next(err);
    }
  }
}

module.exports = todoController;