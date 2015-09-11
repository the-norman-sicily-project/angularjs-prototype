'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var MonasteriesSchema = new Schema({
  siteName: String,
  modernProvince: String,
});

module.exports = mongoose.model('Monasteries', MonasteriesSchema);
