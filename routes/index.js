const { Router } = require("express");
const categoryRouter = require("./categories.route");

const router = Router();

router.use(categoryRouter);

module.exports = router;
