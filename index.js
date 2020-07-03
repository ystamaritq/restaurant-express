const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

//HandleBars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser Middlware
//this is to handle raw json
app.use(express.json());
//handle url encoded data and forms
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//main reservation handle bars (reservation route)
app.get("/", (req, res) =>
	res.render("index", {
		title: "We have only 5 tables! Book your seat before they are all gone",
		show_tables_btn: true,
		show_reservation_btn: true,
	})
);

//reservation api route "/api/tables"
app.use("/api/tables", require("./routes/api/tables"));

//reservation page route "/reservations"
app.use("/reservations", require("./routes/pages/reservations"));

//reservation page route "/reservations"
app.use("/api/waitinglist", require("./routes/api/waitinglist"));

app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT}`)
);
