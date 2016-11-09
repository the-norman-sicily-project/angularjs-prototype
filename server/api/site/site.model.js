'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

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
  datesVisited: [String],
  details: {},
  type: String
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

SiteSchema.methods.getSlides = function getSlides(resources) {
  var id = `${this._doc.media_id.toString()}/`;
  var pattern = new RegExp('^' + id);
  var slides = _.filter(resources, function(r) { return pattern.test(r.public_id); } );
  return slides;
};

SiteSchema.methods.getVideos = function getVideos(resources) {
  var id = `${this._doc.media_id.toString()}/`;
  var pattern = new RegExp('^' + id);
  var videos = _.filter(resources, function(r) { return pattern.test(r.public_id); } );
  return videos;
};

SiteSchema.methods.getDocuments = function getDocuments() {
  return [];
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
