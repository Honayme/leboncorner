'use strict';

const
  express = require('express'),
  advertController = require('../../controllers/api/advertController');

let router = express.Router();

router.post('/create', advertController.createAdvert);
// router.get('/list', advertController.login);
// router.put('/update', advertController.getUserProfile);
// router.delete('/delete', advertController.updateUserProfile);

module.exports = router;
