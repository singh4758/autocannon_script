"use strict";

const autocannon = require("autocannon");
const { countIds } = require("../helper");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of request ${inpt[0]}\nno of connections ${inpt[1]}\nno of records find per page ${inpt[2]}\nno of innerDocs required ${inpt[3]}`
);

const instance = autocannon(
  {
    title: `lookUp ${new Date().toLocaleString()}`,
    url: "http://localhost:3000",
    connections: inpt[1],
    pipelining: 1,
    timeout: 1000,
    amount: inpt[0],
    requests: [
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: (requests) => {
          const limit = parseInt(inpt[2]);
          const page = parseInt(Math.random() * (500000/limit))+1;
          requests.path = `/api/test-lookup/populate?page=${page}&limit=${limit}&lookUpLimit=${inpt[3]}`;
          return requests;
        },
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

let overallTime = 0;
instance.on('response', (_, __, ___, responseTime) => {
  overallTime += responseTime;
});

instance.on('done', () => {
  console.log('average response time', overallTime/inpt[1]);
});
