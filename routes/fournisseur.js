const {
  createFournisseur,
  getAllFournisseur,
  getFournisseurById,
  updateFournisseur,
  deleteFournisseur,
} = require("../controller/fournisseur");

const { Router } = require("express");

const router = Router();

router.post("/", createFournisseur);
router.get("/", getAllFournisseur);
router.get("/:fournisseurId", getFournisseurById);
router.put("/:fournisseurId", updateFournisseur);
router.delete("/:fournisseurId", deleteFournisseur);

module.exports = router;
