"use strict";

const autocannon = require("autocannon");
const { readIdsRemove } = require("../helper");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of request ${inpt[0]}\nno of connections ${inpt[1]}\nno of records delete per request ${inpt[2]}`
);

const instance = autocannon(
  {
    title: `deleteMany ${new Date().toLocaleString()}`,
    url: "http://localhost:3000",
    connections: inpt[1],
    pipelining: 1,
    timeout: 1000,
    amount: inpt[0],
    requests: [
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: (requests) => {
          requests.body = JSON.stringify({ids: readIdsRemove('NativeUser' , inpt[2])});
          return requests;
        },
        path: `/api/test-crud/delete-many/`,
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
instance.on('response', (_, __, ___, responseTime) => {
  overallTime += responseTime;
});

instance.on('done', () => {
  console.log('average response time', overallTime/inpt[1]);
});
