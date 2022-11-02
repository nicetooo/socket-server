const { PeerServer } = require('peer');
const PEER_PORT = process.env.PEER_PORT || 3001
const peerServer = PeerServer({ port: PEER_PORT, path: '/peer' })
console.log(`peer server run on port ${PEER_PORT}`)