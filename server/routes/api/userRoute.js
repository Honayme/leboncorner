'use strict';

const
  express = require('express'),
  userController = require('../../controllers/api/userController');

let router = express.Router();

router.route('/register/').post(userController.register);
router.post('/login', userController.login); //7:33

// router.get('/users/:id', userController.getUsersWithId());

module.exports = router;
