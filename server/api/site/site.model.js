'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SiteSchema = new Schema({
  siteName: String,
  modernProvince: String,
  siteType: String
});

module.exports = mongoose.model('Site', SiteSchema);
