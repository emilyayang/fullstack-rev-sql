const Sequelize = require('sequelize');
const db = require('./index.js');

const Products = db.define('items', {
  // attributes
  item: {
    type: Sequelize.STRING
  },
  min_cost: {
    type: Sequelize.FLOAT
  },
  curr_bid: {
    type: Sequelize.FLOAT
  },
  ends_in: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false
  });

db.sync()

module.exports = Products;