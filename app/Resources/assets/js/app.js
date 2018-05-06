"user strict";

// Libraries.
require('bootstrap');

// Internal modules.
require('./includes/calendar.js');
require('./includes/collection.js');
require('./includes/events.js');

// Attach globals.
var Globals = require('./includes/globals.js');
Globals.attach();
