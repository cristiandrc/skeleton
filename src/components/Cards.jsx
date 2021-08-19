import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const getData = async () => {
    setLoading(true);
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const dataApi = await response.json();
    setData(dataApi.results);
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);
  console.log(data);

  return <>{isLoading ? <h1>Cargando..</h1> : <Card />}</>;
};

export default Cards;
