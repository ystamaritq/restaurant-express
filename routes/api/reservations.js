const express = require("express");
const reservation = require("../../Reservation.js");
const router = express.Router();
const uuid = require("uuid");

// router.post("/", function (req, res) {
// 	res.json({ msg: "u r good!" });
// });

router.get("/api", (req, res) => res.json(reservations));

module.exports = router;
