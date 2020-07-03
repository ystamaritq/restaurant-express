const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");

//HandleBars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//main reservation handle bars (reservation route)
app.get("/", (req, res) => res.render("index"));

//reservation page
app.get("/reservation", (req, res) =>
	res.render("reservation", {
		title: "Add Reservation",
	})
);

app.listen(PORT, () =>
	console.log(`Example app listening at http://localhost:${PORT}`)
);
