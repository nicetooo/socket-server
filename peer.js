const { PeerServer } = require('peer');
const PORT = process.env.PORT || 3001
const peerServer = PeerServer({ port: PORT, path: '/peer' })
console.log(`peer server run on port ${PORT}`)