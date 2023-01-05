const { Router } = require("express");
const router = Router();
const search = require("../routes/search/search");

router.use("/", search);

module.exports = router;
