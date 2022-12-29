const { provider } = require('../database/models');

const findOne = async (id) => {
  const result = await provider.findOne(
    {
      where: {
        id,
      },
    },
  );
  return result;
};

module.exports = {
  findOne,
};
