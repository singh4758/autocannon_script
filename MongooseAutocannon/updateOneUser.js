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
    title: `updateOneUser ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
    connections: inpt[1],
    pipelining: 1,
    timeout: 1000,
    workers: 4,
    amount: inpt[0],
    requests: [
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: path.join(__dirname, './RequestHandler/updateOneUserRequest.js'),
        path: "/api/test-crud/update-one",
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
