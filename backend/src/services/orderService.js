const { order } = require('../database/models');

const findAll = async () => {
  const result = await order.findAll();
  return result;
};

module.exports = {
  findAll,
};
