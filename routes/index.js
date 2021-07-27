const { Router } = require("express");
const categoryRouter = require("./categories.route");
const schoolRouter = require("./schools.route");

const router = Router();

router.use(categoryRouter);
router.use(schoolRouter);

module.exports = router;
