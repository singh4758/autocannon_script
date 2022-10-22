"use strict";

const autocannon = require("autocannon");
const path = require('path');

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of docs for each request ${inpt[0]}\nno of request ${inpt[1]}\nno of connections ${inpt[2]}`
);

const instance = autocannon(
  {
    title: `bulkInsert ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
    connections: inpt[2],
    pipelining: 1,
    timeout: 1000,
    workers: 4,
    initialContext: { noOfData: inpt[0] },
    amount: inpt[1],
    requests: [
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: path.join(__dirname, './RequestHandler/bulkInsertNestedUserRequest.js'),
        path: "/api/test-nested-write/insert-many",
      },
    ],
  },
  (err, result) => {
    if (!err) {
      Object.keys(result).forEach((key) => {
        console.log(key);
        console.table(result[key]);
      });
    }
  }
);

autocannon.track(instance);

let overallTime = 0;
let count =0;
instance.on('response', (_, __, ___, responseTime) => {
  overallTime += responseTime;
  count++;
});

instance.on('done', () => {
  console.log('no. of successfull response ', count);
  console.log('average response time ', overallTime/count);
});
