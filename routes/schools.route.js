const { Router } = require("express");
const { schoolsController } = require("../controllers/schools.controller");

const router = Router();

router.get("/schools", schoolsController.getAll);
router.get("/school/:id", schoolsController.getSchoolById);
router.get("/:categoryId/schools", schoolsController.getSchoolByCategory);
router.post("/school", schoolsController.createSchool);
router.delete("/school/:id", schoolsController.removeSchool);
router.patch("/school/:id", schoolsController.editSchool);

module.exports = router;
