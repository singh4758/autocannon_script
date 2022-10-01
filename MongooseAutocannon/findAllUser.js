"use strict";

const autocannon = require("autocannon");
const { countIds } = require("../helper");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of request ${inpt[0]}\nno of connections ${inpt[1]}\nno of records find per page ${inpt[2]}`
);

const instance = autocannon(
  {
    title: `findAll ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
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
          const limit = parseInt((Math.random() * 20) + parseInt(inpt[2]));
          const page = parseInt(Math.random() * (countIds('MongooseUser')/limit))+1;
          requests.path = `/api/test-crud/find-all?page=${page}&limit=${limit}`;
          return requests;
        },
        path: `/api/test-crud/find-one/`,
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