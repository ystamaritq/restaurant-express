const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const tables = require("./../../data/tables");
const waitinglist = require("./../../data/waitinglist");

const maxNumOfTables = 3;

router.get("/", (req, res) => res.json(tables));

/**
 * Add a table reservation.
 *
 * Reads reservation values from request,
 * if there is a table available, add a new record,
 * else, add to waiting list.
 */
router.post("/", (req, res) => {
	let table = { name: req.body.name };
	if (tables.length < maxNumOfTables) tables.push(table);
	else waitinglist.push(table);
	res.json(table);
});

module.exports = router;
