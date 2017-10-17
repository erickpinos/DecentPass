const createMetamascaraServer = require('../metamask-extension/mascara/server/');
let events = require('events');

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

const mascaraServer = createMetamascaraServer();

const mascaraPort = 9001
mascaraServer.listen(mascaraPort)
console.log(`Mascara service listening on port ${mascaraPort}`)