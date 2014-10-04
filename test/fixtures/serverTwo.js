/**
 * Created by krzysztof on 04.10.14.
 */
'use strict';

var http = require('http');
var server = http.createServer(function (req, res) {
  res.end();
});

server.listen(3002, function () {
  console.log('ENV: ' + process.env.NODE_ENV);
});
