const {
    createPiece,
    getAllPieces,
    getPieceById,
    updatePiece,
    deletePiece,
  } = require("../controller/Piece");
  
  const { Router } = require("express");
  
  const router = Router();
  

  
  router.post("/", createPiece);
  router.get("/", getAllPieces);
  router.get("/:PieceId", getPieceById);
  router.put("/:PieceId", updatePiece);
  router.delete("/:PieceId", deletePiece);
  
  module.exports = router;
  