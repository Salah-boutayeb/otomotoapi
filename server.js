const express = require("express");
const colors = require("colors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5555;
const logger = require("morgan");

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const fournisseursRoutes = require("./routes/fournisseur");
const piecesRoutes = require("./routes/piece");
const db = require("./models/index");
const app = express();

/* app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false })); */
app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use("/api/user", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/fournisseurs", fournisseursRoutes);
app.use("/api/pieces", piecesRoutes);
db.sequelize
  .sync({ force: false, alter: true })
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(port, () => console.log(`server started on port :${port}`));
