'use strict';

let router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('PONG Modafoca!');
});

router.use('/dragons', require('./dragons'));

module.exports = router;
