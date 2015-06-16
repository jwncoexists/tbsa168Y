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
  pdf: String,
  reflections: [{
    by: String,
    reflection: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  living: Boolean,
  officer: Boolean,
  reunions: [String],
  sm: String,
  location: String,
  school: String,
  commission: String,
  mos: Number,
  career: String,
  decorations: String,
  active: Boolean
});

module.exports = mongoose.model('Person', PersonSchema);
