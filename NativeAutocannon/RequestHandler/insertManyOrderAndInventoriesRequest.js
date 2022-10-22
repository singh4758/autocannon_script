const { generateOrderAndInventory } = require("../../schemaToGenerateFakeData");

module.exports = (requests, context) => {
  const { noOfData } = context;
  const { orders, inventories } = generateOrderAndInventory(noOfData);
  requests.body = JSON.stringify({
    orders,
    inventories,
  });
  return requests;
}