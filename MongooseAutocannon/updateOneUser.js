"use strict";

const autocannon = require("autocannon");
const { readIds } = require("../helper");
const { generateUserData } = require("../schemaToGenerateFakeData");

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
    amount: inpt[0],
    requests: [
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: (requests) => {
          const updateBody = generateUserData(1)[0];
          delete updateBody._id;
          requests.body = JSON.stringify({
            id: readIds('NativeUser' , 1)[0],
            updateBody,
          });
          return requests;
        },
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