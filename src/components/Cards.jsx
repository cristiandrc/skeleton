import React, { useState, useEffect } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import "../style/Cards.css";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="cards">
      {isLoading
        ? new Array(30).fill(1).map((c, i) => <SkeletonCard key={i} />)
        : data.map((character) => <Card key={character.id} {...character} />)}
    </div>
  );
};

export default Cards;
