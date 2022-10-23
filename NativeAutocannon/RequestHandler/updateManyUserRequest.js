const { generateUserData } = require("../../schemaToGenerateFakeData");
const nativeUserIds = require('../../dataGenerated/NativeUserIds.js');

module.exports = (requests, context) => {
  const { noOfData } = context;
  const updateBody = generateUserData(1)[0];
  requests.body = JSON.stringify({
    ids: nativeUserIds.splice(0, noOfData),
    updateBody,
  });
  return requests;
};
