"use strict";

const autocannon = require("autocannon");
const { readIds } = require("../helper");
const { generateUserData } = require("../schemaToGenerateFakeData");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of docs for each request ${inpt[0]}\nno of request ${inpt[1]}\nno of connections ${inpt[2]}`
);

const instance = autocannon(
  {
    title: `updateManyUser ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
    connections: inpt[2],
    pipelining: 1,
    timeout: 1000,
    amount: inpt[1],
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
            ids: readIds('MongooseUser' , inpt[0]),
            updateBody,
          });
          return requests;
        },
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

let overallTime = 0;
instance.on('response', (_, __, ___, responseTime) => {
  overallTime += responseTime;
});

instance.on('done', () => {
  console.log('average response time', overallTime/inpt[1]);
});
