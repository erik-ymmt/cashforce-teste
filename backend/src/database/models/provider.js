const ProviderModel = (sequelize, DataType) => {
  const Provider = sequelize.define('provider', {
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
    bank: DataType.STRING,
    bankAgency: DataType.STRING,
    account: DataType.STRING,
    documents: DataType.STRING,
    phoneNumber: DataType.STRING,
    situation: DataType.STRING,
    situationDate: DataType.STRING,
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    cnpjId: DataType.NUMBER,
    email: DataType.STRING,
  });

  return Provider;
};

module.exports = ProviderModel;
