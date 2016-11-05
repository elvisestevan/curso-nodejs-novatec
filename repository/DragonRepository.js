'use strict';

let db = require('../config/mongo');
let dragons = db.collection('dragons');

let DragonRepository = {
  find: function(query, callback) {
    dragons.find(query, callback)
  },
  findOne: function(query, callback) {
    if(query._id) {
      query._id = db.ObjectId(query._id);
    }    
    dragons.findOne(query, callback);
  },
  insert: function(data, callback) {
    return dragons.insert(data, callback);
  },
  update: function(query, data, callback) {
    if(query._id) {
      query._id = db.ObjectId(query._id);
    }
    dragons.update(query, {$set: data}, callback);
  },
  remove: function(query, callback) {
    if(query._id) {
      query._id = db.ObjectId(query._id);
    }
    dragons.remove(query, callback);
  }
};

module.exports = DragonRepository;
