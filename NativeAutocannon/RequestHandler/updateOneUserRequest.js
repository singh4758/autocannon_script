const { generateUserData } = require("../../schemaToGenerateFakeData");
const nativeUserIds = require('../../dataGenerated/NativeUserIds.js');

module.exports = (requests) => {
  const updateBody = generateUserData(1)[0];
  requests.body = JSON.stringify({
    id: nativeUserIds.splice(0, 1)[0],
    updateBody,
  });
  return requests;
};
