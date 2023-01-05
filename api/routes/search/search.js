const { Router } = require("express");
const app = Router();
const fs = require("fs");
const { ParseData } = require("../../utils/parsedata");
const axios = require("axios");

var listpokemon;

app.get("/", async (req, res) => {
  if (fs.existsSync("data/db.json")) {
    return;
  } else {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((result) => {
        listpokemon = result.data.results;
        fs.writeFileSync("data/db.json", JSON.stringify(result.data.results));
      });
  }
});

app.get("/search", async (req, res) => {
  const name = req.query.name;

  if (name) {
    const readlist = fs.readFileSync("data/db.json");
    const listpokemon = JSON.parse(readlist);
    const regex = new RegExp("^" + name);
    const newlist = listpokemon.filter((element, i) => {
      if (element.name.match(regex)) return element.name;
    });
    const parsepokemon = await ParseData(newlist);
    res.send(parsepokemon);
  }
});

module.exports = app;
