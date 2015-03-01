'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  platoon: String,
  photo: String,
  date: String,
  restingPlace: String,
  bio: String,
  bioHtml: String,
  bioPhoto: String,
  active: Boolean
});

module.exports = mongoose.model('Person', PersonSchema);
