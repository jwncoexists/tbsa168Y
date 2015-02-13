/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /emails              ->  index
 * POST    /emails              ->  create
 * GET     /emails/:id          ->  show
 * PUT     /emails/:id          ->  update
 * DELETE  /emails/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Email = require('./email.model');
var mongoose = require('mongoose');
var mailgun = require('mailgun-js')(
  {
    apiKey: process.env.MGMAIL_KEY,
    domain: process.env.MGMAIL_DOMAIN
  }
);

// Get list of emails
exports.index = function(req, res) {
  Email.find(function (err, emails) {
    if(err) { return handleError(res, err); }
    return res.json(200, emails);
  });
};

// Get a single email
exports.show = function(req, res) {
  Email.findById(req.params.id, function (err, email) {
    if(err) { return handleError(res, err); }
    if(!email) { return res.send(404); }
    return res.json(email);
  });
};

// sends a new email
exports.create = function(req, res) {

  var data = {
    from: req.body.sender,
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.msg
  };
  console.log('sending email', req.body.recipient, req.body.subject, req.body.msg);

  mailgun.messages().send(data, function (err, body) {
    if(err) { return handleError(res, err); }
       return res.json(201, email);
  });
  // Email.create(req.body, function(err, email) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(201, email);
  // });
};

// Updates an existing email in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Email.findById(req.params.id, function (err, email) {
    if (err) { return handleError(res, err); }
    if(!email) { return res.send(404); }
    var updated = _.merge(email, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, email);
    });
  });
};

// Deletes a email from the DB.
exports.destroy = function(req, res) {
  Email.findById(req.params.id, function (err, email) {
    if(err) { return handleError(res, err); }
    if(!email) { return res.send(404); }
    email.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
