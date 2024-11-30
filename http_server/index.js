const express = require("express");
const app = express();
const port = process.env.port || 3000 ; 
const bodyParser = require('body-parser') ; 

app.use(bodyParser.json())

app.post("/", (req, res) => {
  console.log(req.body); 
  console.log(req.params.body); 
  // console.log(req.headers["authorization"]);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
