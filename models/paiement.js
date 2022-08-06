"use strict";
import { Model } from("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paiement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paiement.belongsTo(models.Commande, {
        foreignKey: "panierId",
        onDelete: "CASCADE",
      });
    }
  }
  Paiement.init(
    {
      datePaiement: DataTypes.DATE,
      methode: DataTypes.STRING,
      totale: DataTypes.STRING,
      commandeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Paiement",
    }
  );
  return Paiement;
};
