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
  bioPhoto2: String,
  reflections: [{
    by: String,
    reflection: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  active: Boolean
});

module.exports = mongoose.model('Person', PersonSchema);
