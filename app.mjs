import bodyParser from "body-parser";
import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("home", { pageTitle: "Home" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users });
});

app.post("/users", (req, res, next) => {
  res.redirect("/");
  users.push(req.body.user);
  console.log(users);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
