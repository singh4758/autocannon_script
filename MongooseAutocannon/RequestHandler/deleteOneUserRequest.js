const mongooseUserIds = require('../../dataGenerated/MongooseUserIds');

module.exports = (requests) => {
  requests.body = JSON.stringify({
    id: mongooseUserIds.splice(0, 1)[0],
  });
  return requests;
};
