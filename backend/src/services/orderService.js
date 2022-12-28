const { Order } = require('../database/models');

const findAll = async () => {
  const result = await Order.findAll();
  return result;
};

module.exports = {
  findAll,
};
