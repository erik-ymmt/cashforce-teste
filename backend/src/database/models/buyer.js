const BuyerModel = (sequelize, DataType) => {
  const Buyer = sequelize.define('buyer', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    name: DataType.STRING,
    tradingName: DataType.STRING,
    cashforceTax: DataType.STRING,
    responsibleName: DataType.STRING,
    responsibleEmail: DataType.STRING,
    responsiblePosition: DataType.STRING,
    responsiblePhone: DataType.STRING,
    responsibleMobile: DataType.STRING,
    website: DataType.STRING,
    postalCode: DataType.STRING,
    address: DataType.STRING,
    number: DataType.STRING,
    complement: DataType.STRING,
    neighborhood: DataType.STRING,
    city: DataType.STRING,
    state: DataType.STRING,
    phoneNumber: DataType.STRING,
    situation: DataType.STRING,
    situationDate: DataType.STRING,
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    cnpjId: DataType.NUMBER,
    confirm: DataType.NUMBER,
    email: DataType.STRING,
  });

  return Buyer;
};

module.exports = BuyerModel;
