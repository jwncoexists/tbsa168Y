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
// var request = require('request');
// var appRoot = require('app-root-path');

// support markdown for person.bio
var markdown = require( "markdown" ).markdown;

// Get list of persons
exports.index = function(req, res) {
  Person.find()
        // only populate the name field
        .populate({path: 'reflections.user', select: 'name'})
        .sort({name: 'asc'})
        .exec(function (err, persons) {
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
  // convert info from markdown to html if present
  if (req.body.bio) {
    req.body.bioHtml = markdown.toHTML(req.body.bio);
  }
  Person.create(req.body, function(err, person) {
    if(err) { return handleError(res, err); }
    return res.json(201, person);
  });
};

// Updates an existing person in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  req.body.reflections.forEach(function(reflection) {
    if (reflection.user._id) {
      reflection.user = reflection.user._id
    }
  })
  if (req.body.bioHtml){
    req.body.bioHtml = markdown.toHTML(req.body.bio);
  }
  Person.findByIdAndUpdate(req.params.id, req.body, function (err, person) {
    if (err) { return handleError(res, err); }
    if(!person) { return res.send(404); }
    // convert markdown to HTML
    return res.json(200, person);
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
