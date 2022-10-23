const { generateNestedUserData } = require("../../schemaToGenerateFakeData");
const mongooseNestedUserIds = require('../../dataGenerated/MongooseNestedUserIds');

module.exports = (requests, context) => {
  const { noOfData } = context;
  const updateBody = generateNestedUserData(1)[0];
  requests.body = JSON.stringify({
    ids: mongooseNestedUserIds.splice(0, noOfData),
    updateBody,
  });
  return requests;
};
