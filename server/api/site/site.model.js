'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SiteSchema = new Schema({
  name: {
    en: String,
    it: String
  },
  location: {
      longitude: Number,
      latitude: Number,
      isExact: Boolean,
      modernProvince: String,
      approximate:String,
      elevation:Number
  },
  type: String
});

module.exports = mongoose.model('Site', SiteSchema);
