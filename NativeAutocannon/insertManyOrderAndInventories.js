"use strict";

const autocannon = require("autocannon");
const { storeId } = require('./../helper');
const { generateOrderAndInventory } = require("../schemaToGenerateFakeData");

let inpt = Object.values(process.argv)
  .slice(2)
  .map((value) => parseInt(value));

console.log(
  `no of docs for each request ${inpt[0]}\nno of request ${inpt[1]}\nno of connections ${inpt[2]}`
);

const instance = autocannon(
  {
    title: `insertMany ${new Date().toLocaleString()}`,
    url: "http://localhost:3000",
    connections: inpt[2],
    pipelining: 1,
    timeout: 1000,
    amount: inpt[1],
    requests: [
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: (requests) => {
          const { orders, inventories } = generateOrderAndInventory(inpt[0]);
          requests.body = JSON.stringify({
            orders,
            inventories,
          });
          return requests;
        },
        onResponse: (status, res) => {
          if (status === 200) {
            // storeId(JSON.parse(res || "")?.body?.insertedIds || {}, "NativeOrderAndInventories");
          }
        },
        path: "/api/test-lookup/insert-many",
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
