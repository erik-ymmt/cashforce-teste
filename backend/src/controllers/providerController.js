const services = require('../services');

const findAll = async (_req, res) => {
  const result = await services.providerService.findAll();
  res.status(200).json(result);
};

module.exports = {
  findAll,
};
