const { order } = require('../database/models');
const { buyer, provider } = require('../database/models');

const findAll = async () => {
  const result = await order.findAll({
    include: [
      { model: buyer, as: 'buyer' },
      { model: provider, as: 'provider' },
    ],
  });
  return result;
};

module.exports = {
  findAll,
};
