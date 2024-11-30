const express = require("express");
const cors = require('cors') ; 


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const c = a + b;
  res.send(c.toString());
});

app.get('/interest', (req, res) => {
    const { principal, rate, time } = req.query;

    // Validate inputs
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
        return res.status(400).send('Invalid input. Please provide positive numbers for principal, rate, and time.');
    }

    // Calculate interest
    const interest = (p * r * t) / 100;

    // Respond with the result
    res.send(`The calculated interest is ${interest}`);
});

app.listen(3000, (err)=> {
if(!err) console.log("Server is running")
});
