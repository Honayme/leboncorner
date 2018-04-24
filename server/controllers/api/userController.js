'use strict';

const bcrypt = require('bcrypt'),
      jwt    = require('jsonwebtoken'),
      models = require('../../orm/models');


function register (req, res) {

  let username = req.body.username,
      email    = req.body.email,
      password = req.body.password;

  if(email == null || username == null || password== null) {
    return res.status(400).json({'error': 'missing parameters'})
  }

  models.User.findOne({
    attributes :['email'],
    where: {email: email}
  })
    .then(function(userFound) {

    })
    .catch(function(err){

    });
  })

function login (req, res){

}

module.exports = {
  register,
  login
};
