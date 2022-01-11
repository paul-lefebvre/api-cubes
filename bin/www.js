#!/usr/bin/env node
/* eslint-disable no-fallthrough */

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('api:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

let portServer = normalizePort(process.env.PORT || '3000');
app.set('port', portServer);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(portServer);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let portServerNorm = parseInt(val, 10);

  if (isNaN(portServerNorm)) {
    // named pipe
    return val;
  }

  if (portServerNorm >= 0) {
    // port number
    return portServerNorm;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      process.exit(1);
    case 'EADDRINUSE':
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
