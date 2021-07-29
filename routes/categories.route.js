const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/categories", categoriesController.getAll);
router.get("/categories/:id", categoriesController.getCategoryById);
router.post("/category", categoriesController.createCategory);
router.delete("/category/:id", categoriesController.removeCategory);
router.patch("/category/:id", categoriesController.editCategory);

module.exports = router;
