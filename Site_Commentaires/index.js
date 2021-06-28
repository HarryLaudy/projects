var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
require('dotenv').config()
var server = express();

server.use(express.json());
server.use(express.urlencoded());

server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour mon super serveur</h1>');
});

server.use('/api/', apiRouter);

server.listen(process.env.PORT , () => {
    console.log(`Serevr listening at http://localhost:${process.env.PORT}`);
});
