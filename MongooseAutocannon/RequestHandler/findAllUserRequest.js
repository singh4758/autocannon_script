const mongooseUserIds = require('../../dataGenerated/MongooseUserIds');

module.exports = (requests, context) => {
  const { limit } = context;
  const page = parseInt(Math.random() * (mongooseUserIds.length/limit))+1;
  requests.path = `/api/test-crud/find-all?page=${page}&limit=${limit}`;
  return requests;
}