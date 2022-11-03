const { PeerServer } = require('peer');
const PORT = process.env.PORT || 3000;
const peerServer = PeerServer({ path: '/peer', port: PORT })
console.log(`peer server run on port ${PORT}`)