const express = require("express");
const router = express.Router();

//reservation page
router.get("/", (req, res) =>
	res.render("reservation", {
		title: "Make your reservation",
		show_tables_btn: true,
		show_home_btn: true,
	})
);

module.exports = router;
