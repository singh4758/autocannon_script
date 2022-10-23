const { generateUserData } = require("../../schemaToGenerateFakeData");
const mongooseUserIds = require('../../dataGenerated/MongooseUserIds');

module.exports = (requests) => {
  const updateBody = generateUserData(1)[0];
  requests.body = JSON.stringify({
    id: mongooseUserIds.splice(0, 1)[0],
    updateBody,
  });
  return requests;
};
