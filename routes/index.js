'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.get('/', MainController.index);

router.get('/outrogato', MainController.outroGato);
router.use('/api', require('./api'));

module.exports = router;
