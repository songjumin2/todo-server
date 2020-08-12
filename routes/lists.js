const express = require("express");
const router = express.Router();

const { getList } = require("../controllers/lists");

router.route("/").get(getList);

module.exports = router;
