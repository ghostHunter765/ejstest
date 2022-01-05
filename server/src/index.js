const express = require("express");
const path = require("path");
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const fs = require("fs");

const tokens = [];
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.get("/", (req, res) => {
	res.send("sdfsdf");
});

app.get("/builder/:token", (req, res) => {
	console.log(req.params.token);
	if (tokens.includes(JSON.stringify({ id: req.params.token }))) {
		res.render("index.html", { user: "file" });
	}
	res.sendStatus(400);
});

app.get("/fetchfile", (req, res) => {
	// const data = fs.readFileSync("src/sample.txt");
	res.setHeader("ContentType", "application/file");
	res.sendFile(path.join(__dirname + "/sample.txt"));
});

app.post("/fileauth", (req, res) => {
	const newtoken = JSON.stringify({ id: req.body.id });
	tokens.push(newtoken);
	res.send(newtoken);
});

app.listen(5000, () => console.log("live"));
