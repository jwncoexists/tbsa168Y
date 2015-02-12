/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /persons              ->  index
 * POST    /persons              ->  create
 * GET     /persons/:id          ->  show
 * PUT     /persons/:id          ->  update
 * DELETE  /persons/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Person = require('./person.model');

// Get list of persons
exports.index = function(req, res) {
  Person.find().sort({name: 'asc'}).exec(function (err, persons) {
    if(err) { return handleError(res, err); }
    return res.json(200, persons);
  });
};

// Get a single person
exports.show = function(req, res) {
  Person.findById(req.params.id, function (err, person) {
    if(err) { return handleError(res, err); }
    if(!person) { return res.send(404); }
    return res.json(person);
  });
};

// Creates a new person in the DB.
exports.create = function(req, res) {
  Person.create(req.body, function(err, person) {
    if(err) { return handleError(res, err); }
    return res.json(201, person);
  });
};

// Updates an existing person in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Person.findById(req.params.id, function (err, person) {
    if (err) { return handleError(res, err); }
    if(!person) { return res.send(404); }
    var updated = _.merge(person, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, person);
    });
  });
};

// Deletes a person from the DB.
exports.destroy = function(req, res) {
  Person.findById(req.params.id, function (err, person) {
    if(err) { return handleError(res, err); }
    if(!person) { return res.send(404); }
    person.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
