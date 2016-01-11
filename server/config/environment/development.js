'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost:27017/sicilianormanna-dev'
  },

  // Seed database on startup
  seedDB: true
};
