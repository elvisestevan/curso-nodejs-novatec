'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.get('/', MainController.index);

router.get('/outrogato', function (req, res, next) {
  res.send('Miaau');
});

module.exports = router;
