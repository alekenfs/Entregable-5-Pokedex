import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const PokemonPreview = ({pokemon}) => {
    const[pokemonInfo, setPokemonInfo]= useState([])
    useState(()=>{
        axios.get(`${pokemon.url}`).then(res=>setPokemonInfo(res.data))
    },[])
    console.log(pokemonInfo);
    return (
       <>
       <div className='pokemon-info-container'>
        <div className='pokemon-info'>
            <section className='pokemon-type'>
<Link to={`/pokedex/${pokemon.name}`}>
     <h1>{pokemonInfo.name}</h1>
     </Link>
     <b className='type' > Types:
            {pokemonInfo.types?.map(typelis=>(
        <b>
            {typelis.type.name}</b>
     ))}</b>
     </section>
<b>HP: {pokemonInfo.stats?.[0].base_stat}</b>
<b>Attack: {pokemonInfo.stats?.[1].base_stat}</b>

     </div>
 
     

     <img src={pokemonInfo.sprites?.other.home.front_default} alt="" />
     </div>
       </>
    );
};

export default PokemonPreview;