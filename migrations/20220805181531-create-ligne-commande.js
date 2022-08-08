"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ligneCommandes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      /* pieceId: {
        type: Sequelize.INTEGER,
      },
      commandeId: {
        type: Sequelize.INTEGER,
      }, */
      isDelivered: {
        type: Sequelize.BOOLEAN,
      },
      quantite: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("ligneCommandes");
  },
};
