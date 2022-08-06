"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Commande.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      Commande.hasOne(models.Paiement, {
        foreignKey: "commandeId",
      });
      Commande.belongsToMany(models.Piece, {
        through: models.ligneCommande,
      });
    }
  }
  Commande.init(
    {
      dateCommande: DataTypes.DATE,
      dateLivraison: DataTypes.DATE,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Commande",
    }
  );
  return Commande;
};
