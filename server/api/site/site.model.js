'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
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
    var slides = [];
    // images are assumed to be kept in a single directory per site with no
    // subdirectories. Only image files will be kept in these directories
    // (no listing files, etc.)
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

SiteSchema
  .virtual('tooltipText')
  .get(function(){
    var tooltipElements = [];

    if (this.details){
      if (this.details.order) {
        tooltipElements.push(this.details.order);
      }

      if (this.details.classificationAtFoundation) {
        tooltipElements.push(this.details.classificationAtFoundation);
      }
    }

    if (this.location) {
      if (this.location.approximate) {
        tooltipElements.push(this.location.approximate);
      }

      if (this.location.modernProvince) {
        tooltipElements.push('Province of ' + this.location.modernProvince);
      }

      if (this.location.elevation) {
        tooltipElements.push(this.location.elevation + ' Meters');
      }
    }

    return tooltipElements.join(', ');
  });

module.exports = mongoose.model('Site', SiteSchema);
