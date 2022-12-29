const OrderModel = (sequelize, DataType) => {
  const Order = sequelize.define(
    'order',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      orderNfId: DataType.STRING,
      orderNumber: DataType.STRING,
      orderPath: DataType.STRING,
      orderFileName: DataType.STRING,
      orderOriginalName: DataType.STRING,
      emissionDate: DataType.STRING,
      pdfFile: DataType.STRING,
      emitedTo: DataType.STRING,
      nNf: DataType.STRING,
      CTE: DataType.STRING,
      value: DataType.STRING,
      createdAt: DataType.DATE,
      updatedAt: DataType.DATE,
      cnpjId: DataType.INTEGER,
      userId: DataType.INTEGER,
      buyerId: DataType.INTEGER,
      providerId: DataType.INTEGER,
      orderStatusBuyer: DataType.STRING,
      orderStatusProvider: DataType.STRING,
      deliveryReceipt: DataType.STRING,
      cargoPackingList: DataType.STRING,
      deliveryCtrc: DataType.STRING,
    },
    {
      tableName: 'orders',
    },
  );

  Order.associate = (models) => {
    Order.belongsTo(
      models.buyer,
      {
        as: 'buyer', through: Order, foreignKey: 'buyerId', otherKey: 'id',
      },
    );

    Order.belongsTo(
      models.provider,
      {
        as: 'provider', through: Order, foreignKey: 'providerId', otherKey: 'id',
      },
    );
  };

  return Order;
};

module.exports = OrderModel;
