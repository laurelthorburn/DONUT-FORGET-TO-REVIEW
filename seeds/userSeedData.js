const { User } = require('../models');

const userdata = [
    {
      "username": "Mariana",
      "password": "password12345"
    },
    {
      "username": "Laurel",
      "password": "password12345"
    },
    {
      "username": "Florencia",
      "password": "password12345"
    },
    {
      "username": "Pei",
      "password": "password12345"
    }
    ];

    const seedUser = () => User.bulkCreate(userdata);
    
    module.exports = seedUser;
  