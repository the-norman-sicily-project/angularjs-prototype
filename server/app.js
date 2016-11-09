/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';
import expressConfig from './config/express';
import routes from './routes';
import cloudinary from 'cloudinary';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  throw new Error(`MongoDB connection error: ${err}`);
});

// Populate databases with sample data
if (config.seedDB) {
  require('./config/seed');
}

// Setup server
var app = express();
var server = http.createServer(app);
expressConfig(app);
routes(app);

cloudinary.v2.api.resources(
  { resource_type: 'image' },
  function(error, result) {
    if (error) {
      console.log(error);
    } else {
      if (result.resources) {
        app.set('cloudinary.images', result.resources);
      }
    }
  },
);

cloudinary.v2.api.resources(
  { resource_type: 'video' },
  function(error, result) {
    if (error) {
      console.log(error);
    } else {
      if (result.resources) {
        app.set('cloudinary.videos', result.resources);
      }
    }
  },
);

// Start server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
