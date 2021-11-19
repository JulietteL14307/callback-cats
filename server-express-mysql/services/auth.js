const jwt = require('jsonwebtoken');
const models = require('../models/index');
const bcrypt = require("bcryptjs");

//import users from '../server-express-mysql/models/users';

let authService = {
  signUser: function (user) {
      const token = jwt.sign({
              Username: user.Username,
              UserId: user.UserId,
              Admin: user.Admin
          },
          "secret", {
              expiresIn: "1h"
          }
      );
      return token;
  },
  
verifyUser: function (token) {  //<--- receive JWT token as parameter
    try {
      let decoded = jwt.verify(token, 'secretkey'); //<--- Decrypt token using same key used to encrypt
      return models.users.findByPk(decoded.AdminId); //<--- Return result of database query as promise
    } catch (err) {
      console.log(err + " , Failpoint 2");
      return null;
    }
  },
  hashPassword: function(plainTextPassword) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(plainTextPassword, salt);
    return hash;
  },
  comparePasswords: function (plainTextPassword, hashedPassword) {
    return bcrypt.compareSync(plainTextPassword, hashedPassword)
  }
}

module.exports = authService;