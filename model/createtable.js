module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "demonslayer",
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );
  return User;
};
// `sequelize.define` also returns the model
