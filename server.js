'use strict';

require('dotenv').config();

const
  server = require('./server/index')(),
  config = require('./server/config/local');

server.create(config);
server.start();

