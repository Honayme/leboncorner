'use strict';
module.exports = (sequelize, DataTypes) => {
  var Advert = sequelize.define('Advert', {
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    zip: DataTypes.INTEGER,
  }, {});
  Advert.associate = function(models) {
    // associations can be defined here
    models.Advert.belongsTo(models.User, {
      foreignKey:  {
        allowNull: false
      }
    })
  };
  return Advert;
};
