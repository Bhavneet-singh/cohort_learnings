const express = require("express");

const app = express();

let users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const kidney = users[0].kidneys;
  const numberofkidneys = kidney.length;
  let numberofhealthykidneys = 0;

  for (let i = 0; i < numberofkidneys; i++) {
    if (kidney[i].healthy) {
      numberofhealthykidneys++;
    }
  }
  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;

  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys,
  });
});

app.post("/", (req, res) => {
  const ishealthy = req.query.ishealthy;

  users[0].kidneys.push({
    healthy: ishealthy,
  });

  res.json({
    task: "done!",
  });
});

app.put("/", (req, res) => {
  if (isOneBadKidney) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      task: "Done!",
    });
  }
  else{
    res.status(411).json({
      msg : "You have no bad kidney"
    })
  }
});

app.delete("/", (req, res) => {
  if (isOneBadKidney) {
    let newKidney = [];

    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidney.push({
          healthy: true,
        });
      }
      users[0].kidneys = newKidney;

      res.json({
        task: "done!",
      });
    }
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isOneBadKidney() {
  let tosend = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!users[0].kidneys.healthy) {
      tosend = true;
    }
  }
  return tosend;
}

app.listen(2000, function (req, res) {
  console.log("Server is running on port 2000");
});
