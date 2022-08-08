const {
    createPanier,
    getAllPaniers,
    getPanierById,
    updatePanier,
    deletePanier,
  } = require("../controller/Panier");
  
  const { Router } = require("express");
  
  const router = Router();
  

  
  router.post("/", createPanier);
  router.get("/", getAllPaniers);
  router.get("/:PanierId", getPanierById);
  router.put("/:PanierId", updatePanier);
  router.delete("/:PanierId", deletePanier);
  
  module.exports = router;
  