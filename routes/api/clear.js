const express = require("express");
const router = express.Router();
const tables = require("./../../data/tables");
const waitinglist = require("./../../data/waitinglist");

router.post("/", function (req, res) {
	tables.length = 0;
	waitinglist.length = 0;

	res.json({ ok: true });
});

module.exports = router;
