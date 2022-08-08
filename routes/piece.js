const {
  createPiece,
  getAllpieces,
  getPieceById,
  updatePiece,
  deletePiece,
} = require("../controller/piece");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { Router } = require("express");

const router = Router();

router.post("/", upload.single("image"), createPiece);
router.get("/", getAllpieces);
router.get("/:pieceId", getPieceById);
router.put("/:pieceId", updatePiece);
router.delete("/:pieceId", deletePiece);

module.exports = router;
