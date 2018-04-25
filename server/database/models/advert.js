'use strict';
module.exports = (sequelize, DataTypes) => {
  const Advert = sequelize.define('Advert', {
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    zip: DataTypes.INTEGER,
  }, {});
  Advert.associate = function(models) {
    // associations can be defined here
    models.Advert.belongsTo(models.User, { //TODO Fail to create user_id in advert table
      foreignKey:  {
        allowNull: false
      }
    })
  };
  return Advert;
};
