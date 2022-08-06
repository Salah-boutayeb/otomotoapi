"use strict";
import { Model } from("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Piece extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Piece.belongsTo(models.Fournisseur, {
        foreignKey: "fournisseurId",
        onDelete: "CASCADE",
      });
      Piece.belongsTo(models.Category, {
        foreignKey: "categoryId",
        onDelete: "CASCADE",
      });
      Piece.belongsTo(models.Panier, {
        foreignKey: "panierId",
        onDelete: "CASCADE",
      });
      Piece.belongsToMany(models.Commande, {
        through: models.ligneCommande,
      });
      Piece.hasMany(models.Image, {
        onDelete: "CASCADE",
      });
    }
  }
  Piece.init(
    {
      VIN: DataTypes.STRING,
      reference: DataTypes.STRING,
      description: DataTypes.JSON,
      typeVehicule: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      fournisseurId: DataTypes.INTEGER,
      panierId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Piece",
    }
  );
  return Piece;
};
