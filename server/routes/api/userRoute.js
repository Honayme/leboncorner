'use strict';

const
  express = require('express'),
  userController = require('../../controllers/api/userController');

let router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me', userController.getUserProfile);
router.put('/me', userController.updateUserProfile);

module.exports = router;
