'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;
var fs = require('fs');
var _ = require('lodash');
var path = require('path');

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

SiteSchema
  .virtual('slides')
  .get(function() {
    var slides = [];
    // images are assumed to be kept in a single directory per site with no
    // subdirectories. Only image files will be kept in these directories
    // (no listing files, etc.)
    var siteImagesPath = path.join(__dirname, `/../../media/images/sites/${this._id.toString()}`);
    try {
      fs.statSync(siteImagesPath);
      var files = fs.readdirSync(siteImagesPath);
      slides = files.map(function(file) {
        if (file !== '.DS_Store') {
          return {filename: file};
        }
        return null;
      });
    } catch(err) {
      //console.log('Directory ' + siteImagesPath + ' does not exist!');
    }
    return slides;
  });

SiteSchema
  .virtual('videos')
  .get(function() {
    var videos = [];
    // videos are assumed to be kept in a single directory per site with no
    // subdirectories. Only video files will be kept in these directories
    // (no listing files, etc.)
    var siteVideosPath = path.join(__dirname, `/../../media/videos/sites/${this._id.toString()}`);
    var siteVideoTitle = this.name.en;
    try {
      fs.statSync(siteVideosPath);
      var files = fs.readdirSync(siteVideosPath);
      videos = _.compact(files.map(function(file) {
        if (file !== '.DS_Store') {
          return {filename: file, title: siteVideoTitle};
        }
        return null;
      }));
    } catch(err) {
      //console.log('Directory ' + siteVideosPath + ' does not exist!');
    }

    return videos;
  });

SiteSchema
  .virtual('documents')
  .get(function() {
    var documents = [];
    // documents are assumed to be kept in a single directory per site with no
    // subdirectories. Only video files will be kept in these directories
    // (no listing files, etc.)
    var siteDocumentsPath = path.join(__dirname, `/../../media/documents/sites/${this._id.toString()}`);
    var siteDocumentTitle = this.name.en;
    try {
      fs.statSync(siteDocumentsPath);
      var files = fs.readdirSync(siteDocumentsPath);
      documents = _.compact(files.map(function(file) {
        if (file !== '.DS_Store') {
          return {filename: file, title: siteDocumentTitle};
        }
        return null;
      }));
    } catch(err) {
      //console.log('Directory ' + siteDocumentsPath + ' does not exist!');
    }

    return documents;
  });

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
