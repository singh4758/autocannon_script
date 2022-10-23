"use strict";

const autocannon = require("autocannon");
const path = require('path');

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of request ${inpt[0]}\nno of connections ${inpt[1]}`
);

const instance = autocannon(
  {
    title: `deleteOne ${new Date().toLocaleString()}`,
    url: "http://localhost:3000",
    connections: inpt[1],
    pipelining: 1,
    timeout: 1000,
    workers: 6,
    amount: inpt[0],
    requests: [
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: path.join(__dirname, './RequestHandler/deleteOneUserRequest.js'),
        path: `/api/test-crud/delete-one/`,
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