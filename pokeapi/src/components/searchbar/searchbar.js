import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ handlerSubmit }) => {
  const [InputName, setInputName] = useState("");

  const handlerChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => handlerSubmit(e, InputName)}>
        <input
          type="text"
          onChange={handlerChange}
          className="input_search"
          value={InputName}
        />
        <button
          disabled={false}
          type="submit"
          className="button_search"
        >
          Buscar
        </button>
      </form>
    </>
  );
};

export default SearchBar;
