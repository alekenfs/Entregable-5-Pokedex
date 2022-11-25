import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Input from './Components/Input'
import PokemonCard from './Components/PokemonCard'
import Pokedex from './Components/Pokedex'
import ProtectedRoutes from './Components/ProtectedRoutes'
function App() {


  return (
  
<HashRouter>
<Routes >
<Route path="/" element={<Input/>}/>

<Route element={<ProtectedRoutes/>}>
<Route path="/pokedex" element={<Pokedex/>}/>
<Route path="/pokedex/:name" element={<PokemonCard/>}/>
</Route>
</Routes>
</HashRouter>



  )
}

export default App
