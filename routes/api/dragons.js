'use strict';

let router = require('express').Router();

let DragonController = require('../../controller/DragonController');

router.get('/', DragonController.list);

module.exports = router;
