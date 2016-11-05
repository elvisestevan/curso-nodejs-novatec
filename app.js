'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser());
app.use(require('./routes'));

app.use(function(req, res, next) {
  let error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use(function(error, req, res, next) {
  res.status(error.status || 500).json(error.message);
});

module.exports = app;
