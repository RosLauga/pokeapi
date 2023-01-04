const axios = require("axios");

const ParseData = async (pokemon) => {
  const arrayaux = [];
  //   console.log(pokemon);

  for (let index = 0; index < pokemon.length; index++) {
    const obj = { name: "", img: "" };
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon[index].name}`
    );

    obj.name = data.data.name;
    obj.img = data.data.sprites.front_default;
    arrayaux.push(obj);
  }
  console.log(arrayaux);
  return arrayaux;
};

module.exports = {
  ParseData,
};
