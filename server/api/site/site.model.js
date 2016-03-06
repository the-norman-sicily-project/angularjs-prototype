'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;
var cloudinary = require('cloudinary');

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
  datesVisited: [String],
  details: {},
  type: String
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

SiteSchema.methods.getSlides = function getSlides(cb) {
  cloudinary.api.resources({type: 'upload',
    prefix: `${this.media_id.toString()}/`},
    function(error, result) {
      cb(error, result);
    });
};

SiteSchema.methods.getVideos = function getVideos(cb) {
  cb(null, null);
};

SiteSchema.methods.getDocuments = function getDocuments(cb) {
  cb(null, null);
};

SiteSchema
  .virtual('tooltipText')
  .get(function() {
    var tooltipElements = [];

    if (this.details) {
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
        tooltipElements.push(`Province of ${this.location.modernProvince}`);
      }

      if (this.location.elevation) {
        tooltipElements.push(`${this.location.elevation} Meters`);
      }
    }

    return tooltipElements.join(', ');
  });

module.exports = mongoose.model('Site', SiteSchema);
