const createMetamascaraServer = require('../../metamask-extension/mascara/server/');

const mascaraServer = createMetamascaraServer();

const mascaraPort = 9001;
mascaraServer.listen(mascaraPort);
console.log(`Mascara service listening on port ${mascaraPort}`)