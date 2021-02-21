const { Todo } = require('../models/index');

async function authorize(req, res, next) {
  let id = +req.params.id;
  let UserId = +req.decoded.id;
  try {
    let todo = await Todo.findOne({ where: { id }});
    if (todo) {
      if (todo.UserId === UserId) {
        next();
      } else {
        throw {
          name: 'CustomError',
          msg: 'Not authorized!',
          status: 401
        }
      }
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

module.exports = {
  authorize
}