'use strict';

//TODO http://docs.sequelizejs.com/manual/tutorial/querying.html#operators deprecated String

const bcrypt       = require('bcrypt'),
      jwtHelper    = require('../../helpers/jwtHelper'),
      models       = require('../../database/models');

let register,
    login;

register = (req, res) => {

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
};

login = (req, res) =>{
    let email    = req.body.email,
        password = req.body.password;

    if (email == null || password == null) {
      return res.status(400).json({'error': 'missing paramaters'})
    }

    models.User.findOne({
      where: {email: email}
    })
      .then(function(userFound){
        if (userFound){

          bcrypt.compare(password, userFound.password, function(errBcrypt, resBcrypt){
            if(resBcrypt){
              return res.status(200).json({
                'userId': userFound.id,
                'token' : jwtHelper.generateUserToken(userFound)
              })
            } else {
              return res.status(403).json({'error': 'invalid password'})
            }
          })
        }else{
          return res.status(400).json({'error': 'user do not exist in database' })
        }
      })
      .catch(function(err){
        console.log(err);
        return res.status(500).json({'error': 'unable to verify user'});
      })
};

module.exports = {
  register,
  login
};
