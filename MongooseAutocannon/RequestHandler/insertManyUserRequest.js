const { generateUserData } = require("../../schemaToGenerateFakeData");

module.exports = (requests, context) => {
  const { noOfData } = context;
  requests.body = JSON.stringify({
    usersData: generateUserData(noOfData),
  });
  return requests;
}