const express = require('express');

const router = require('./routers/router.js');

const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`Node DB Challenge`)
})

server.use('/api/projects', router);

module.exports = server;