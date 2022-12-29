const services = require('../services');

const findOne = async (req, res) => {
  const { id } = req.params;
  const result = await services.providerService.findOne(id);
  res.status(200).json(result);
};

module.exports = {
  findOne,
};
