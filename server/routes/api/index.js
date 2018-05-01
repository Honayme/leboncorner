'use strict';

const
  express = require('express'),
  users   = require('./userRoute'),
  adverts = require('./advertRoute');

let router = express.Router();

router.use('/users', users);
router.use('/adverts', adverts);


module.exports = router;
