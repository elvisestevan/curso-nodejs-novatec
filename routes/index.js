'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.get('/', MainController.index);

router.get('/outrogato', MainController.outroGato);

module.exports = router;
