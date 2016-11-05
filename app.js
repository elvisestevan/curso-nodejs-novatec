'use strict';

let express = require('express');
let app = express();

app.use(require('./routes'));

module.exports = app;
