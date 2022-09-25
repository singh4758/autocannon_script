const { ObjectId } = require('mongodb');
const { faker } = require("@faker-js/faker");

const generateOrderAndInventory = (totalDocs) => {
  const orders = [];
  const inventories = [];
  for (let i = 0; i < totalDocs; i += 1) {
    const product = faker.commerce.productName();
    const order = {
      _id: new ObjectId(),
      item: product,
      price: faker.commerce.price(),
      quantity: Math.random() * 10,
    };
    const inventory = {
      _id: new ObjectId(),
      sku: product,
      description: faker.commerce.productDescription(),
      inStock: Math.random() * 100,
    };
    orders.push(order);
    inventories.push(inventory);
  }
  return { orders, inventories };
}

module.exports = { generateOrderAndInventory };