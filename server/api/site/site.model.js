'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SiteSchema = new Schema({
  name: {
    en: String,
    it: String,
    variations: [String]
  },
  bibliography: String,
  notes: String,
  extantRemains: Boolean,
  primarySourceQuotation: String,
  location: {
      longitude: Number,
      latitude: Number,
      isExact: Boolean,
      modernProvince: String,
      approximate: String,
      elevation: Number
  },
  datesVisited:[String],
  details:{},
  type: String
});

module.exports = mongoose.model('Site', SiteSchema);
