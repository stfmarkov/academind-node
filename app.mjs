import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/products", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "products.html"));
});

app.use(express.static('public'))


app.listen(3000, () => console.log("Server is listening on port 3000"));
