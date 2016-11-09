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
    return res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function responseWithResult2(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      entity._doc.slides = entity.getSlides(res.app.get('cloudinary.image'));
      entity._doc.videos = entity.getVideos(res.app.get('cloudinary.video'));
      entity._doc.documents = [];
      return res.status(statusCode).json(entity);
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
    var updated = _.extend(entity, updates);
    return updated.save()
      .then(function(err, updatedItem) {
        if (err) {
          return err;
        }
        return updatedItem;
      })
      .catch(function(err) {
        console.log(err);
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Sites
exports.index = function(req, res) {
  return Site.find()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Site from the DB
exports.show = function(req, res) {
  return Site.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult2(res))
    .catch(handleError(res));
};

// Creates a new Site in the DB
exports.create = function(req, res) {
  return Site.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Site in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Site.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Site from the DB
exports.destroy = function(req, res) {
  return Site.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
