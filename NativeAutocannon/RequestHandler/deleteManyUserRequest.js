const mongooseUserIds = require('../../dataGenerated/MongooseUserIds');

module.exports = (requests, context) => {
  const { noOfData } = context;
  requests.body = JSON.stringify({
    ids: mongooseUserIds.splice(0, noOfData),
  });
  return requests;
};
