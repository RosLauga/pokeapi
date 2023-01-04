const { default: axios } = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { ParseData } = require("./utils/parsedata");

app.use(express.json({ limit: "200mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = 5000;

var listpokemon;

app.get("/", async (req, res) => {
  const name = req.query.name;
  if (name) {
    const regex = new RegExp("^" + name);
    const newlist = listpokemon.filter((element, i) => {
      if (element.name.match(regex)) return element.name;
    });
    const parsepokemon = await ParseData(newlist);
    res.send(parsepokemon);
  } else {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((result) => {
        listpokemon = result.data.results;
        res.send(listpokemon);
      });
  }
});

// app.get("/a", (req, res) => {
//   const newlist = listpokemon.filter((element, i) => {
//     if (element.name.charAt(0) == "a") return element.name;
//   });
//   console.log(newlist);
//   res.send(newlist);
// });

app.listen(PORT, () => {
  console.log("Server corriendo en ", PORT);
});
