"use strict";

const autocannon = require("autocannon");
const { noOfRecords } = require("../constant");
const { storeId } = require("../helper");
const {
  generateUserData,
} = require("../schemaToGenerateFakeData");

const instance = autocannon(
  {
    title: `createUser ${new Date().toLocaleString()}`,
    url: "http://localhost:4000",
    connections: 1,
    pipelining: 1,
    duration: 10,
    amount: 5,
    requests: [
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        setupRequest: (requests) => {
          requests.body = JSON.stringify({
            usersData: generateUserData(noOfRecords),
          });
          return requests;
        },
        onResponse: (status, res) => {
          if(status === 200) {
            storeId(JSON.parse(res || '')?.body?.insertedIds || {}, 'User');
          }
        },
        path: "/api/test-crud/insert-many",
      },
    ],
  },
  (err, result) => {
    if(!err) {
      Object.keys(result).forEach((key) => {
        console.log(key);
        console.table(result[key]);
      });
    }
  }
);

autocannon.track(instance);
