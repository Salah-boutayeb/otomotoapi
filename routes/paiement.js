const {
    createPaiement,
    getAllpaiements,
    getPaiementById,
    updatePaiement,
    deletePaiement,
  } = require("../controller/Paiement");
  
  const { Router } = require("express");
  
  const router = Router();
  

  
  router.post("/", createPaiement);
  router.get("/", getAllpaiements);
  router.get("/:PaiementId", getPaiementById);
  router.put("/:PaiementId", updatePaiement);
  router.delete("/:PaiementId", deletePaiement);
  
  module.exports = router;
  