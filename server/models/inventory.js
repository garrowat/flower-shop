const inventory = (sequelize, DataTypes) => {

  const Inventory = sequelize.define(
    'inventory', {
      image: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      price: {
        type: DataTypes.DECIMAL(12, 2),
      },
      stars: {
        type: DataTypes.INTEGER,
        validate: {
          max: 5,
        },
      },
    }
  );

  return Inventory;
};

module.exports = inventory;