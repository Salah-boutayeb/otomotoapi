"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Panier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Panier.hasMany(models.Piece, {
        foreignKey: "panierId",
      });
      Panier.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  Panier.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Panier",
    }
  );
  return Panier;
};
