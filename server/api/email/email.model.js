'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmailSchema = new Schema({
  name: String,
  subject: String,
  recipient: String,
  sender: String,
  msg: String,
  active: Boolean
});

module.exports = mongoose.model('Email', EmailSchema);
