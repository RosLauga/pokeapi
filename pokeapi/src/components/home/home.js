import React, { useState, useEffect } from "react";
import Main from "../main/main";
import SearchBar from "../searchbar/searchbar";
import axios from "axios";

const Home = () => {
  const [Error, setError] = useState();
  const [Info, setInfo] = useState();
  const [Loading, setLoading] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL);
  }, []);

  useEffect(() => {
    if (Loading) setLoading(false);
  }, [Info]);

  const handlerSubmit = (e, name) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(process.env.REACT_APP_URL + "/search/?name=" + name.toLowerCase())
      .then((result) => {
        setInfo(result.data);
      })
      .catch((err) => err);
  };

  return (
    <>
      <h1>Pokémon Finder</h1>
      <h3>¡El que quiera Pokémons, que los busque!</h3>
      <nav>
        <SearchBar handlerSubmit={handlerSubmit} />
      </nav>
      <main>
        {Loading ? (
          <h3 className="loading">Cargando Pokémons, por favor espere</h3>
        ) : (
          <Main data={Info && Info} error={Error && Error} />
        )}
      </main>
    </>
  );
};

export default Home;
