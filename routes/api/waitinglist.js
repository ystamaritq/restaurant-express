const express = require("express");
const router = express.Router();
const waitinglist = require("./../../data/waitinglist");

router.get("/", (req, res) => res.json(waitinglist));

module.exports = router;
