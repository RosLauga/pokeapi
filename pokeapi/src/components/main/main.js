import React, { useEffect, useState } from "react";
import Card from "../card/card";
import "./main.css";

const Main = (props) => {
  const [Pokemon, setPokemon] = useState();

  useEffect(() => {
    if (props.data) setPokemon(props.data);
  }, [props]);

  return (
    <>
      <section className="cards">
        {Pokemon && Pokemon.length ? (
          <>
            <h2>Resultados de la busqueda {Pokemon.length}</h2>
            {Pokemon.map((poke, i) => (
              <Card name={poke.name} img={poke.img} key={i} />
            ))}
          </>
        ) : (
          <h3>Sin datos</h3>
        )}
      </section>
      <footer className="footer">
        <span>Hecho por Lauga Rodrigo</span>
        <a href="">Repo de la Aplicación</a>
      </footer>
    </>
  );
};

export default Main;
