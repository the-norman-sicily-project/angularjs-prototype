/**
 * Monasteries model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Monasteries = require('./monasteries.model');
var MonasteriesEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MonasteriesEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Monasteries.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MonasteriesEvents.emit(event + ':' + doc._id, doc);
    MonasteriesEvents.emit(event, doc);
  }
}

module.exports = MonasteriesEvents;
