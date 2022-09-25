const { generateOrderAndInventory } = require('./OrderAndInventoriesData.Schema');
const { generateNestedUserData } = require('./nestedUserDataSchema');
const { generateUserData } = require('./usersDataSchema');

module.exports = { generateNestedUserData, generateOrderAndInventory, generateUserData };
