'use strict';

let MainController = {

  index: function(req, res, next) {
    let q = req.query.q;
    res.status(401);
    res.send({
      name: 'Elveeeees',
      q: q
    });
  }

};

module.exports = MainController;
