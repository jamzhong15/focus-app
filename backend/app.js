const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello"));
app.get("/test", (req, res) => res.send("API is working properly"));

app.post("/posttest", function (req, res) {
  const body = req.body.Body;
  res.set("Content-Type", "text/plain");
  res.send(`You sent: ${body} to Express`);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
