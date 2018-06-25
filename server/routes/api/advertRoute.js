'use strict';

const
  express = require('express'),
  advertController = require('../../controllers/api/advertController');

let router = express.Router();

router.post('/create', advertController.createAdvert);
router.get('/all', advertController.getAllAdvert);
router.get('/detail/:id', advertController.getDetailAdvert);
router.get('/me', advertController.getUserAdvert);
router.put('/update', advertController.updateAdvert);
router.delete('/delete', advertController.deleteAdvert);

module.exports = router;
