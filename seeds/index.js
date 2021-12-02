const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedPost = require('./postSeedData');

const seedAll = async () => {
  await sequelize.sync({ force: true }); //connects to my sql db then drops existing table, bc of force true

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();
