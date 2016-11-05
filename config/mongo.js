'use strict';

let mongojs = require('mongojs');
let db = mongojs('curso-nodejs');

module.exports = db;
