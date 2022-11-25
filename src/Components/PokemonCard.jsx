import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemonDetails, setpokemonDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => setpokemonDetails(res.data));
  }, []);
  console.log(pokemonDetails);
  return (
    <>
      <h1>{pokemonDetails.name?.toUpperCase()}</h1>
      <img src={pokemonDetails.sprites?.other.home.front_default} alt="" />

    </>
  );
};

export default Pokemon;
