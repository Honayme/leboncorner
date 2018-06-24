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
  let fields    = req.query.fields;
  let limit     = parseInt(req.query.limit);
  let offset    = parseInt(req.query.offset);
  let order     = req.query.order;
  let advertId  = req.body.id ;


  models.Advert.findAll({
    order:      [(order != null) ? order.split(':') : ['title', 'ASC']],
    attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
    limit:      (!isNaN(limit)) ? limit : null,
    offset:     (!isNaN(offset)) ? offset : null,
    include: [{
      model: models.User,
      attributes: [ 'username' ]
    }],
    where: {id : advertId}
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

getUserAdvert = (req, res) => {
  let headerAuth = req.headers['authorization'];
  let userId     = jwtHelper.getUserId(headerAuth);

  let fields  = req.query.fields;

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
      if (userFound) {
        models.Advert.findAll({
          attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
          where: {userId: userId},
          include: [{
            model: models.User,
            attributes: ['username']
          }]
        })
          .then(function (userAdvertFound) {
          done(userAdvertFound);
        });
      } else {
        res.status(404).json({'error': 'user not found'});
      }
    }
  ], function(userAdvertFound) {
        if (userAdvertFound) {
          return res.status(201).json(userAdvertFound);
        } else {
          return res.status(500).json({ 'error': 'cannot find the required Advert' });
        }
      });
};

updateAdvert = (req, res) => {

//Getting auth header
  let headerAuth  = req.headers['authorization'];
  let userId      = jwtHelper.getUserId(headerAuth);

  // Params
  let id = req.body.id;
  let title = req.body.title;
  let picture = req.body.picture;
  let price = req.body.price;
  let desc = req.body.desc;
  let zip = req.body.zip;

  console.log(id);

  asyncLib.waterfall([
    function(done) {
      models.Advert.findOne({
        attributes: ['id','userId', 'title', 'picture', 'price', 'desc', 'zip'],
        where: { id : id,
                 userId: userId
        }
      }).then(function (advertFound) {
        // console.log(advertFound);
        done(null, advertFound);
      })
        .catch(function(err) {
          console.log(err);
          return res.status(500).json({ 'error': 'unable to found advert' });
        });
    },
    function(advertFound, done) {
      if(advertFound) {
        advertFound.update({
          title: (title ? title : advertFound.title),
          picture: (picture ? picture : advertFound.picture),
          price: (price ? price : advertFound.price),
          desc: (desc ? desc : advertFound.desc),
          zip: (zip ? zip : advertFound.zip)
        }).then(function() {
          done(advertFound);
        }).catch(function(err) {
          console.log("2nd function during the update " + err);
          res.status(500).json({ 'error': 'cannot update advert' });
        });
      } else {
        // console.log("pas d'advert");
        res.status(404).json({ 'error': 'advert not found' });
      }
    },
  ], function(advertFound) {
    if (advertFound) {
      return res.status(201).json(advertFound);
    } else {
      return res.status(500).json({ 'error': 'cannot update advert' });
    }
  });

};

deleteAdvert = (req, res) => {
//Getting auth header
  let headerAuth  = req.headers['authorization'];
  let userId      = jwtHelper.getUserId(headerAuth);

  // Params
  let id = req.body.id;

  asyncLib.waterfall([
    function(done) {
      models.Advert.findOne({
        attributes: ['id','userId'],
        where: { id : id,
          userId: userId
        }
      }).then(function (advertFound) {
        console.log(advertFound);
        done(null, advertFound);
      })
        .catch(function(err) {
          console.log(err);
          return res.status(500).json({ 'error': 'unable to destroy advert' });
        });
    },
    function(advertFound, done) {
      if(advertFound) {
        advertFound.destroy({
          where: { id : id,
            userId: userId
          }
        }).then(function() {
          done(advertFound);
        }).catch(function(err) {
          console.log("2nd function during the destroy " + err);
          res.status(500).json({ 'error': 'cannot destroy advert' });
        });
      } else {
        res.status(404).json({ 'error': 'advert not found' });
      }
    },
  ], function(advertFound) {
    if (advertFound) {
      return res.status(201).json(advertFound);
    } else {
      return res.status(500).json({ 'error': 'cannot destroy advert' });
    }
  });

};


module.exports = {
  createAdvert,
  getAllAdvert,
  getDetailAdvert,
  getUserAdvert,
  updateAdvert,
  deleteAdvert
};
