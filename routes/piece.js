const {
  createPiece,
  getAllpieces,
  getPieceById,
  updatePiece,
  deletePiece,
} = require("../controller/piece");

const { Router } = require("express");
const { upload } = require("../config/uploadConfig");
const router = Router();

router.post("/", upload.array("imgs"), createPiece);
router.post("/upload", upload.array("imgs"), (req, res) => {
  var desc = JSON.parse(req.body.description);

  console.log(desc.taille);

  return res.status(200).send("uploaded");
});
router.get("/", getAllpieces);
router.get("/piasa", (req, res) => {
  const obj = {
    id: 4,
    vin: "bla bla bla",
    reference: "220100S",
    description: "zsgszgszgsgsdgsg",
    description1: {
      Filetage: "M 16 x 1,50 x 12",
      Longueur_mm: 15.5,
      Ouverture_de_la_clé: "8 x 8",
      Article_complémentaire_et_Info_complémentaire_2:
        "avec bague d'étanchéité",
      Type_emballage: "Emballage en blister",
      CORTECO: "Vis-bouchon, carter d'huile",
    },
    typeVehicule: "3",
    categoryId: 0,
    fournisseurId: 0,
    panierId: 0,
    createdAt: "01/09/2022",
    updatedAt: "02/09/2022",
    quantite: 5,

    cover: "./images/flash/piece4.jpg",
    name: "CORTECO 220100S Vis-bouchon, carter d'huile",
    price: 50,
  };
  return res.status(200).send(obj);
});
router.get("/:pieceId", getPieceById);
router.put("/:pieceId", updatePiece);
router.delete("/:pieceId", deletePiece);

module.exports = router;
