"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fournisseur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fournisseur.hasMany(models.Piece, {
        foreignKey: "fournisseurId",
      });
    }
  }
  Fournisseur.init(
    {
      nom: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Fournisseur",
    }
  );
  return Fournisseur;
};
