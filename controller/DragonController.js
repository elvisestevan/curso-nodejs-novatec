'use strict';

let repository = require('../repository/DragonRepository');

let DragonController = {
  list: function (req, res, next) {
    repository.find({}, function(err, data) {
      res.json(data);
    });
  },

  create: function (req, res, next) {
    let body = req.body;

    repository.insert(body, function(err, data) {
      res.json(data);
    });
  },

  findById: function (req, res, next) {
    repository.findOne({ _id: req.params.id}, function(err, data) {
      if(!data) {
        let error = new Error('Dragon not found');
        error.status = 404;
        return next(error);
      }
      res.json(data);
    });
  },

  remove: function (req, res, next) {
    let id = req.params.id;

    repository.remove({_id: id}, function(err, data) {
      res.json(data);
    });
  },

  update: function (req, res, next) {
    let id = req.params.id;
    let body = req.body;

    repository.update({_id: id}, body, function(err, data) {
      res.json(data);
    });
  }

};

module.exports = DragonController;
