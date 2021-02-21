const { User } = require('../models/index');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class userController {
  static async register(req, res, next) {
    const { full_name, email, password } = req.body;
    try {
      const user = await User.create({ full_name, email, password });
      res.status(201).json({
        id: user.id,
        full_name: user.full_name,
        email: user.email
      })
    } catch(err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ where: { email } });
      if (user) {
        const comparedPassword = comparePassword(password, user.password);
        if (comparedPassword) {
          const access_token = generateToken({
            id: user.id,
            email: user.email,
            full_name: user.full_name
          })
          res.status(200).json({
            access_token,
            id: user.id,
            email: user.email,
            full_name: user.full_name
          })
        } else {
          throw {
            name: 'CustomError',
            msg: 'Email or password is incorrect!',
            status: 404
          } 
        }
      } else {
        throw {
          name: 'CustomError',
          msg: 'Email or password is incorrect!',
          status: 404
        }
      }
    } catch(err) {
      next(err);
    }
  }
}

module.exports = userController;