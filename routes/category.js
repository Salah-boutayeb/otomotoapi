const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controller/category");

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:categoryId", getCategoryById);
router.put("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

module.exports = router;
