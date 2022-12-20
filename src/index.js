const express = require("express");
let PORT =process.env.PORT || 8080;
const gameRounter = require("./Controller/game.router");


const dbConnect = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("home Page");
});

app.use("/playzone", gameRounter);

app.listen(PORT||8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
