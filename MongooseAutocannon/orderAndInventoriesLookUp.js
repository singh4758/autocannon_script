"use strict";

const autocannon = require("autocannon");
const path = require('path');

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of request ${inpt[0]}\nno of connections ${inpt[1]}\nno of records find per page ${inpt[2]}\nno of innerDocs required ${inpt[3]}`
);

const instance = autocannon(
  {
    title: `lookUp ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
    connections: inpt[1],
    pipelining: 1,
    timeout: 1000,
    amount: inpt[0],
    workers: 4,
    initialContext: { noOfData: inpt[2], noOfInnerData: inpt[3] },
    requests: [
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: path.join(__dirname, './RequestHandler/orderAndInventoriesLookUpRequest.js'),
        path: `/api/test-lookup/populate/`,
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
