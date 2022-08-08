"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pieces", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      VIN: {
        type: Sequelize.STRING,
      },
      reference: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.JSON,
      },
      quantite: {
        type: Sequelize.INTEGER,
      },
      typeVehicule: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Categories",
          key: "id",
          as: "categoryId",
        },
      },
      fournisseurId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Fournisseurs",
          key: "id",
          as: "fournisseurId",
        },
      },
      panierId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Panier",
          key: "id",
          as: "panierId",
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
    await queryInterface.dropTable("Pieces");
  },
};
