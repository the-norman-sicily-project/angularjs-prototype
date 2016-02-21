'use strict';

var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;
var fs = require('fs');

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
},{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

SiteSchema
  .virtual('slides')
  .get(function() {
    console.log('0');
    var slides = [];
    var siteImagesPath = __dirname + "/../../media/images/sites/" + this._id.toString();
    try {
      fs.statSync(siteImagesPath);
      var files = fs.readdirSync(siteImagesPath);
      slides = files.map(function(file) {
       return {filename: file}; 
      });
    } catch(err) {
      console.log('Directory ' + siteImagesPath + ' does not exist!');
    }
    return slides;
  });

module.exports = mongoose.model('Site', SiteSchema);
