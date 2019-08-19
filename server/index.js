// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router.js');
  const port = 3000;

  const server = express();
  const morgan = require('morgan');
  const bodyParser = require('body-parser');

  server.use(morgan('dev'))
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.use('/', express.static(path.join(__dirname, '/../client/dist')));
  server.use('/api', router)

  server.listen(port, () => console.log('Connected to port: 3000'))