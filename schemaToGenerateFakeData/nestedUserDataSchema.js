const { faker } = require("@faker-js/faker");

const generateNestedUserData = (totalDocs) => {
  const result = [];
  for (let i = 0; i < totalDocs; i += 1) {
    const addresses = [];

    for (let j = 0; j < Math.random() * 3 + 1; j += 1) {
      const address = {
        city: faker.address.city(),
        country: faker.address.country(),
        state: faker.address.state(),
        street: faker.address.street(),
        zipcode: faker.address.zipCode(),
      };
      addresses.push(address);
    }

    const newAddress = addresses.map((address) => ({...address, address: addresses}));

    const personData = {
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dob: faker.date.birthdate(),
      job: {
        jobType: faker.name.jobType(),
        jobArea: faker.name.jobArea(),
        jobDescriptor: faker.name.jobDescriptor(),
        jobTitle: faker.name.jobTitle(),
        addresses: newAddress,
      },
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };
    result.push(personData);
  }
  return result;
}

module.exports = { generateNestedUserData };