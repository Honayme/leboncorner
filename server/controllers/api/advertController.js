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
          console.log("1st function when try to find user "+err);
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

getAllAdvert = (req, res) => {
  let fields  = req.query.fields;
  let limit   = parseInt(req.query.limit);
  let offset  = parseInt(req.query.offset);
  let order   = req.query.order;


  models.Advert.findAll({
    order:      [(order != null) ? order.split(':') : ['title', 'ASC']],
    // attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
    attributes: ['title'],
    limit:      (!isNaN(limit)) ? limit : null,
    offset:     (!isNaN(offset)) ? offset : null,
    include: [{
      model: models.User,
      attributes: [ 'username' ]
    }]
  }).then(function(advert) {
    if (advert) {
      res.status(200).json(advert);
    } else {
      res.status(404).json({ "error": "no advert found" });
    }
  }).catch(function(err) {
    console.log(err);
    res.status(500).json({ "error": "invalid fields" });
  });
};

getDetailAdvert= (req, res) => {

};

getUserAdvert = (req, res) => {

};

updateAdvert = (req, res) => {

};

deleteAdvert = (req, res) => {

};


module.exports = {
  createAdvert,
  getAllAdvert
};
