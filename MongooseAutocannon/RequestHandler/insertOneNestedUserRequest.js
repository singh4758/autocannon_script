const { generateNestedUserData  } = require("../../schemaToGenerateFakeData");

module.exports = (requests, context) => {
  requests.body = JSON.stringify({
    ...generateNestedUserData(1)[0],
  });
  return requests;
}