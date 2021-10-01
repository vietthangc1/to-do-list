const express = require("express");
const appendix = require(__dirname+"/appendix.js")
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let list_act = ["Wake up!"];
let list_work = ["Complete assignment"];
let current_item;
let title;


app.get("/", function (req, res) {
  title = appendix.getDay()
	res.render("list", { th_title: title, th_list: list_act });
});

app.post("/", function (req, res) {
	current_item = req.body.th_item;
	button_value = req.body.button;
	console.log(button_value);

	if (button_value == "Work") {
		list_work.push(current_item);
		res.redirect("/work");
	} else {
		list_act.push(current_item);
		res.redirect("/");
	}
});

app.get("/work", function (req, res) {
	title = "Work list";
	res.render("list", { th_title: title, th_list: list_work });
});

app.get("/aboutme", function (req, res) {
	res.render("aboutme", { th_title: "Work" });
});

app.get("/clear-items", function (req, res) {
	if (title == "Work list") {
		list_work = [];
		res.redirect("/work");
	} else {
		list_act = [];
		res.redirect("/");
	}
});

app.listen(3000, function () {
	console.log("Server run!");
});
