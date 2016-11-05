'use strict';

let MainController = {

  index: function(req, res, next) {
    res.send('I am the INDEX!!!!!');
  },

  outroGato: function (req, res, next) {
    res.send('I am the other CAT!!!!');
  }

};

module.exports = MainController;
