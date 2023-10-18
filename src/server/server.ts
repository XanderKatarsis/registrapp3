const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middleware = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middleware);
server.use(jsonServer.bodyParser);



