'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create subdoc for user-specified reflections
var reflectionSchema = new Schema ({
  reflection: String,
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var PersonSchema = new Schema({
  name: String,
  platoon: String,
  photo: String,
  date: String,
  restingPlace: String,
  bio: String,
  bioHtml: String,
  bioPhoto: String,
  bioPhoto2: String,
  reflections: [reflectionSchema],
  active: Boolean
});

module.exports = mongoose.model('Person', PersonSchema);
