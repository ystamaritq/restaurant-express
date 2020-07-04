const express = require("express");
const router = express.Router();
const tables = require("./../../data/tables");
const waitinglist = require("./../../data/waitinglist");

const maxNumOfTables = 5;

router.get("/", (req, res) => res.json(tables));

/**
 * Add a table reservation.
 *
 * Reads reservation values from request,
 * if there is a table available, add a new record,
 * else, add to waiting list.
 */
router.post("/", (req, res) => {
	let table = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		id: req.body.id,
	};
	if (tables.length < maxNumOfTables) tables.push(table);
	else waitinglist.push(table);
	res.json(table);
});

router.delete("/", function (req, res) {
	tables.length = 0;
	waitinglist.length = 0;

	res.json([{}]);
});

module.exports = router;
