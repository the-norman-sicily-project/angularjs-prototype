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

function deleteDerived(nextCursor) {
  try {
    var config = {
      // IMPORTANT : If you don't use this, then ALL photos will be deleted
      keep_original: true
    };

    if(nextCursor) config.next_cursor = nextCursor;

    // This will delete all derived resources up to the cursor limit of 2000
    cloudinary.api.delete_all_resources(function(result) {

      // Just some logging to show what got deleted
      console.log("\n\n");
      console.log( new Date());
      console.log(result);

      // Wait 5 seconds to prevent exceeding your API limit
      if(result && result.next_cursor) {
        setTimeout(function() {
          deleteDerived(result.next_cursor);
        });
      }
    }, config ); // Be sure to pass in the config or say Bye Bye to all your photos
  } catch(e) {
    console.log("Failed!!!");
    console.log(e);
    console.log(e.message);
  }
}

setTimeout(function() { deleteDerived(); });

function getCloudinaryResources(resourceType, resourceCollection, nextCursor) {
  var config = {
    resource_type: resourceType,
    max_results: 500
  }

  if (nextCursor) {
    config.next_cursor = nextCursor;
  }

  cloudinary.v2.api.resources(config, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      if (result.resources) {
        resourceCollection = resourceCollection.concat(result.resources);
      }

      if (result.next_cursor) {
        setTimeout(function() {
          getImages(resourceType, resourceCollection, result.next_cursor);
        });
      } else {
        app.set(`cloudinary.${resourceType}`, resourceCollection);
      }
    }
  });
}

var cloudinaryImages = [];
var cloudinaryVideos = [];

setTimeout(function() {
  getCloudinaryResources('image', cloudinaryImages);
});

setTimeout(function() {
  getCloudinaryResources('video', cloudinaryVideos);
});

// Start server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
