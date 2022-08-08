const express = require("express");
const colors = require("colors");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 5555;
const logger = require("morgan");

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const paiementRoutes = require("./routes/paiement");
const panierRoutes = require("./routes/panier");
const pieceRoutes = require("./routes/piece");
const fournisseursRoutes = require("./routes/fournisseur");
const db = require("./models/index");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api/user", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/paiements", paiementRoutes);
app.use("/api/paniers", panierRoutes);
app.use("/api/pieces", pieceRoutes);
app.use("/api/fournisseurs", fournisseursRoutes);
db.sequelize
  .sync()
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(port, () => console.log(`server started on port :${port}`));
