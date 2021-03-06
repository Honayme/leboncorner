'use strict';
module.exports = (sequelize, DataTypes) => {
  const Advert = sequelize.define('Advert', {
    title: DataTypes.STRING,
    picture: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    zip: DataTypes.INTEGER,
  }, {});
  Advert.associate = function(models) {
    // associations can be defined here
    Advert.belongsTo(models.User, {
      foreignKey:  {
        allowNull: false
      }
    })
  };
  return Advert;
};

//TODO Put validation on model http://docs.sequelizejs.com/manual/tutorial/models-definition.html#model-validations
//TODO Make a seed of data in order to have some advert
