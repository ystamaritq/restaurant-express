const express = require("express");
const router = express.Router();

//tables page
router.get("/", (req, res) =>
	res.render("tables", {
		title: "View your tables",
		show_home_btn: true,
		show_reservation_btn: true,
		show_clear_link: true,
	})
);

module.exports = router;
