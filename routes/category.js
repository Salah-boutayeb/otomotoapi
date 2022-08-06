const express = require("express");
const { crud } = require("express-crud-router");
const { sequelizeCrud } = require("express-crud-router-sequelize-v6-connector");
const { Category } = require("../models");

const app = new express();
app.use(
  crud("/admin/category", {
    ...sequelizeCrud(Category),
    destroy: null,
  })
);
