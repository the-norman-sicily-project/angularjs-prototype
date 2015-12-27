'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
      uri: 'mongodb://localhost:27018/sicilianormanna-dev'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  seedDB: true
};
