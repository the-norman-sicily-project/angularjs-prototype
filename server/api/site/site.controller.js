/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/sites              ->  index
 * POST    /api/sites              ->  create
 * GET     /api/sites/:id          ->  show
 * PUT     /api/sites/:id          ->  update
 * DELETE  /api/sites/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Site = require('./site.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(update) {
        console.log(update);
        return update;
      })
      .catch(function(err) {
        console.log(err);
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Sites
exports.index = function(req, res) {
  Site.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Site from the DB
exports.show = function(req, res) {
  Site.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Site in the DB
exports.create = function(req, res) {
  Site.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Site in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  Site.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Site from the DB
exports.destroy = function(req, res) {
  Site.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
