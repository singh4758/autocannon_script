const mongooseUserIds = require('../../dataGenerated/MongooseUserIds');

module.exports = (requests) => {
  const id = mongooseUserIds.splice(0, 1);
  requests.path = `/api/test-crud/find-one/${id}`;
  mongooseUserIds.push(id);
  return requests;
}