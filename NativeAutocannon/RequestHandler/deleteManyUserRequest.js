const nativeUserIds = require('../../dataGenerated/NativeUserIds.js');

module.exports = (requests, context) => {
  const { noOfData } = context;
  requests.body = JSON.stringify({
    ids: nativeUserIds.splice(0, noOfData),
  });
  return requests;
};
