const nativeUserIds = require('../../dataGenerated/NativeUserIds.js');

module.exports = (requests) => {
  const id = nativeUserIds.splice(0, 1);
  requests.path = `/api/test-crud/find-one/${id}`;
  nativeUserIds.push(id);
  return requests;
}