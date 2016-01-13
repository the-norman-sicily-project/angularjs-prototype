'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var glob = require('glob');
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
    var numberSlides = this.get('number_of_slides');
    for (var i = 0; i < numberSlides; i++) {
        var s = { filename: (i + 1).toString() + '.jpg' }
        console.log(s);
        slides.push(s);
    }
    console.log(slides);
    return slides;
  });

module.exports = mongoose.model('Site', SiteSchema);
