import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios"
import PokemonPreview from "./PokemonPreview";
import { useNavigate,  } from "react-router-dom";
const Pokedex = () => {
  const trainerName = useSelector((state) => state.trainerName);
const [pokemonList, setPokemonList]= useState([])
const [pokemonName, setPokemonName]= useState([])
const [pokemonTypes,setPokemontypes]= useState([])

const navigate= useNavigate()
const searchPokemon=()=>{
navigate(`/pokedex/${pokemonName}`)}

useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/type/").
    then(res=>setPokemontypes(res.data.results))
},[])
useEffect(()=>{
axios.get("https://pokeapi.co/api/v2/pokemon")
.then(res=>(setPokemonList(res.data.results)))    
},[])
console.log(pokemonList);

const filterType=(e)=>{
axios.get(e.target.value)
.then(res=>setPokemonList(res.data.pokemon))
}

  return (
    <div>
      <h1 className="main-title">Welcome to the Pokedex {trainerName}</h1>
<input type="text"
placeholder="Type a pokemon name"
value={pokemonName}
onChange={(e)=>setPokemonName(e.target.value)}/>
<button onClick={()=>searchPokemon()} >Search</button>

<select name="" id="" onChange={filterType}>
   {pokemonTypes.map(type=>(
    <option key={type.name} value={type.url}>{type.name}</option>
   ))}
</select>

<ul>
{pokemonList.map(pokemon=>(
   <li key={pokemon.id}> <PokemonPreview
   pokemon={pokemon?pokemon:pokemon.pokemon}
   />
   </li>
))}
</ul>
    </div>
  );
};

export default Pokedex;
