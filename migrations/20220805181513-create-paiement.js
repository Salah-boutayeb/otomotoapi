"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Paiements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      datePaiement: {
        type: Sequelize.DATE,
      },
      methode: {
        type: Sequelize.STRING,
      },
      totale: {
        type: Sequelize.STRING,
      },
      commandeId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Commandes",
          key: "id",
          as: "commandeId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Paiements");
  },
};
