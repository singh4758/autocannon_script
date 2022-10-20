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
    amount: inpt[0],
    requests: [
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: (requests) => {
          requests.body = JSON.stringify({
            ...generateNestedUserData(1)[0],
          });
          return requests;
        },
        onResponse: (status, res) => {
          if (status === 200) {
            storeId({0: JSON.parse(res || "")?.body?.insertedId} || {}, "NativeNestedUser");
          }
        },
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
