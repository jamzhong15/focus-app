const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello"));
app.get("/test", (req, res) => res.send("API is working properly"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
