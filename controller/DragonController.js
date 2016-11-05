'use strict';

let DragonController = {
  list: function (req, res, next) {
    res.send('Get All Dragons');
  },

  create: function (req, res, next) {
    res.send('create a dragon');
  },

  findById: function (req, res, next) {
    res.send('Get the dragon ' + req.params.id);
  },

  remove: function (req, res, next) {
    res.send('Bye dragon ' + req.params.id);
  },

  update: function (req, res, next) {
    res.send('Update the dragon ' + req.params.id);
  }

};

module.exports = DragonController;
