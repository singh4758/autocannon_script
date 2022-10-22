const { generateNestedUserData } = require("../../schemaToGenerateFakeData");
const nativeNestedUserIds = require('../../dataGenerated/NativeNestedUserIds');

module.exports = (requests, context) => {
  const { noOfData } = context;
  const updateBody = generateNestedUserData(1)[0];
  requests.body = JSON.stringify({
    ids: nativeNestedUserIds.splice(0, noOfData),
    updateBody,
  });
  return requests;
};
