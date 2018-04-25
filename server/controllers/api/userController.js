'use strict';

const bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  models = require('../../database/models');


function register(req, res) {

  let username = req.body.username,
      email = req.body.email,
      password = req.body.password;

  if (email == null || username == null || password == null) {
    return res.status(400).json({'error': 'missing parameters'})
  }

  models.User.findOne({
    attributes: ['email'],
    where: {email: email}
  })
    .then(function (userFound) {
      if (!userFound) {
        bcrypt.hash(password, 5, function (err, bcryptedPassword) {
          models.User.create({
            email: email,
            username: username,
            password: bcryptedPassword
          })
            .then(function (newUser) {
              console.log("New user has been created");
              return res.status(201).json({
                'userId': newUser.id,
                'bcryptedPassword': newUser.password
              })
            })
            .catch(function (err) {
              console.log(err);
              return res.status(500).json({'error': 'fail add user'});
            });
        });
      }else {
        return res.status(400).json({'error': 'user already exist'});
      }
    })
    .catch(function (err) {
      console.log(err);
      return res.status(500).json({'error': 'unable to verify user'});
    });
}

function login(req, res) {

}

module.exports = {
  register,
  login
};
