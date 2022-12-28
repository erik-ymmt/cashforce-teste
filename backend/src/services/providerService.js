const { provider } = require('../database/models');

const findAll = async () => {
  const result = await provider.findAll();
  return result;
};

module.exports = {
  findAll,
};
