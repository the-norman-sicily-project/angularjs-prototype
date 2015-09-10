/**
 * Fortifications model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Fortifications = require('./fortifications.model');
var FortificationsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FortificationsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Fortifications.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FortificationsEvents.emit(event + ':' + doc._id, doc);
    FortificationsEvents.emit(event, doc);
  }
}

module.exports = FortificationsEvents;
