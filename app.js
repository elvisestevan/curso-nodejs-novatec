'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser());
app.use(require('./routes'));

module.exports = app;
