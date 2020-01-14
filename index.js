const express = require('express');

const server = express();

server.use(express.json());

const receipesRouter = require('./receipes/receipes-router.js')

server.use('/api/receipes', receipesRouter);

const port = 6000;

server.listen(port, console.log(`Server running on port ${port}`))