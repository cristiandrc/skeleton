import React, { useState, useEffect } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
      {isLoading
        ? new Array(10).fill(1).map((c, i) => <SkeletonCard key={i} />)
        : data.map((character) => <Card key={character.id} {...character} />)}
    </>
  );
};

export default Cards;
