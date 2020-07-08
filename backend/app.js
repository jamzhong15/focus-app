const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello"));
app.get("/test", (req, res) => res.send("API is working properly"));

app.post("/addTask", function (req, res) {
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
