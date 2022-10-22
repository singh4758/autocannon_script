"use strict";

const autocannon = require("autocannon");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of docs for each request ${inpt[0]}\nno of request ${inpt[1]}\nno of connections ${inpt[2]}`
);

const instance = autocannon(
  {
    title: `updateManyNestedUser ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
    connections: inpt[2],
    pipelining: 1,
    timeout: 1000,
    amount: inpt[1],
    workers: 4,
    intialContext: { noOfData: inpt[0] },
    requests: [
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: path.join(__dirname, './RequestHandler/updateManyNestedUserRequest.js'),
        path: "/api/test-crud/update-many",
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
