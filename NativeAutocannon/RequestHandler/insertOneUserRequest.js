const { generateUserData } = require("../../schemaToGenerateFakeData");

module.exports = (requests, context) => {
  const { noOfData } = context;
  requests.body = JSON.stringify({
    ...generateUserData(1)[0],
  });
  return requests;
}