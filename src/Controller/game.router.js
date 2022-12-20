const express = require("express");
const Playermodel = require("../Model/game.model");
const gameRounter = express.Router();



gameRounter.post("/addplayer", async (req, res) => {
  const {playername,difficulty } = req.body;

  const new_player = new Playermodel({
    playername,
    difficulty
  });
  await new_player.save();
  res.send({ message: "player Created Successfully", player: new_player });
});

gameRounter.get("/allplayer", async (req, res) => {
  let players = await Playermodel.find();
  players=await players.json()
  res.send({ message: "all players", player: players });
});


module.exports = gameRounter;