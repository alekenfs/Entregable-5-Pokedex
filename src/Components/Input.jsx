import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { chanceTrainerName } from '../store/slices/trainerName.slice';

const Input = () => {
const [trainerName, settrainerName] = useState("")
const navigate= useNavigate()
const dispatch= useDispatch()

const enterTrainerName= ()=>{
    navigate("/pokedex")
    dispatch(chanceTrainerName(trainerName))
}
    return (
        <div>
            <h1>Welcome To The Pokedex</h1>
            <input 
            placeholder='Type your name'
            type="text" 
            onChange={(e)=>settrainerName(e.target.value)}
            value={trainerName}
            />
            <button onClick={enterTrainerName} >Enter</button>
        </div>
    );
};

export default Input;