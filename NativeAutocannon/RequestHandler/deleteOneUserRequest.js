const nativeUserIds = require('../../dataGenerated/NativeUserIds.js');

module.exports = (requests) => {
  requests.body = JSON.stringify({
    id: nativeUserIds.splice(0, 1)[0],
  });
  return requests;
};
