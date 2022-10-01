const { createWriteStream } = require('fs');
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/test-nested-write/getDataByStream',
  method: 'GET'
}

var writeStream = createWriteStream('./output.js');
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.pipe(writeStream);
});

req.on('error', error => {
  console.error(error)
})

req.end()
