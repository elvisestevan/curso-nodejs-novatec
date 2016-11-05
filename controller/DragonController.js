'use strict';

let DragonController = {
  list: function (req, res, next) {
    response.send('Get All Dragons');
  },

  create: function (req, res, next) {
    response.send('create a dragon');
  },

  findById: function (req, res, next) {
    response.send('Get the dragon ' + id);
  },

  remove: function (req, res, next) {
    response.send('Bye dragon ' + id);
  },

  update: function (req, res, next) {
    response.send('Update the dragon ' + id);
  }

};

module.exports = DragonController;
