const { generateNestedUserData  } = require("../../schemaToGenerateFakeData");

module.exports = (requests, context) => {
  const { noOfData } = context;
  requests.body = JSON.stringify({
    usersData: generateNestedUserData(noOfData),
  });
  return requests;
}