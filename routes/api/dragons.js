'use strict';

let router = require('express').Router();

let DragonController = require('../../controller/DragonController');

router.get('/', DragonController.list);
router.post('/', DragonController.create);
router.put('/:id', DragonController.update);
router.get('/:id', DragonController.findById);
router.delete('/:id', DragonController.remove);

module.exports = router;
