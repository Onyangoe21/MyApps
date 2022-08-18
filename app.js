/*
 * Purpose: Try simple handling of events:
 *
 * Author: Edwin Onyango
 * 
 * Date: started 18th August 2022
 * */

// Create the event handler class
const EventHandler = require('events');

const listener = EventHandler.on(listener, 'NameLog', (arg) => {
    console.log(arg);
});

