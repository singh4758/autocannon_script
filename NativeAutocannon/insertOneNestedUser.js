"use strict";

const autocannon = require("autocannon");
const { storeId } = require("../helper");
const { generateNestedUserData } = require("../schemaToGenerateFakeData");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of request ${inpt[0]}\nno of connections ${inpt[1]}`
);

const instance = autocannon(
  {
    title: `insertOne ${new Date().toLocaleString()}`,
    url: "http://localhost:3000",
    connections: inpt[1],
    pipelining: 1,
    timeout: 1000,
    workers: 4,
    amount: inpt[0],
    requests: [
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: path.join(__dirname, './RequestHandler/insertOneNestedUserRequest.js'),
        path: "/api/test-nested-write/insert-one",
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
