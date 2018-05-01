'use strict';

const bcrypt    = require('bcrypt'),
      jwtHelper = require('../../helpers/jwtHelper'),
      models    = require('../../database/models'),
      asyncLib  = require('async');

let createAdvert,
    getAllAdvert,
    getDetailAdvert,
    getUserAdvert,
    updateAdvert,
    deleteAdvert;

//TODO Vérifier si on utilise bien l'ORM pour les champs required et les contraintes de taille
createAdvert = (req, res) => {

  let headerAuth = req.headers['authorization'];
  let userId     = jwtHelper.getUserId(headerAuth);

  let title   = req.body.title,
      picture = req.body.picture,
      price   = req.body.price,
      desc    = req.body.desc,
      zip     = req.body.zip;


  asyncLib.waterfall([
    function(done) {
      models.User.findOne({
        where: { id: userId }
      })
        .then(function(userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
    },
    function(userFound, done) {
      if(userFound) {
        models.Advert.create({
          title   : title,
          picture : picture,
          price   : price,
          desc    : desc,
          zip     : zip,
          UserId  : userFound.id
        })
          .then(function(newAdvert) {
            done(newAdvert);
          });
      } else {
        res.status(404).json({ 'error': 'user not found' });
      }
    },
  ], function(newAdvert) {
    if (newAdvert) {
      return res.status(201).json(newAdvert);
    } else {
      return res.status(500).json({ 'error': 'cannot post Advert' });
    }
  });

};


module.exports = {
  createAdvert
};
