import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const response = await fetch("https://rickandmortyapi.com/api/character/");
  //   const dataApi = await response.json();
  //   setData(dataApi.results);
  //   dataApi && setLoading(false);
  // };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Cargando....</h1>
      ) : (
        data.map((character) => <Card key={character.id} {...character} />)
      )}
    </>
  );
};

export default Cards;
