const { generateUserData } = require("../../schemaToGenerateFakeData");
const mongooseUserIds = require('../../dataGenerated/MongooseUserIds');

module.exports = (requests, context) => {
  const { noOfData } = context;
  const updateBody = generateUserData(1)[0];
  requests.body = JSON.stringify({
    ids: mongooseUserIds.splice(0, noOfData),
    updateBody,
  });
  return requests;
};
