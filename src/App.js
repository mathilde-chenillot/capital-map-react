import Map from './map/Map'
import Capitals from './capitals/Capitals'
import './App.css'
import { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import capitalsData from './capitals.json'

function App() {
  const [capitals, setCapitals] = useState(capitalsData)

  return (
    <div className="App">
      <nav className="app-nav">
        <NavLink end className={({isActive}) => isActive ? 'app-link app-link-orange' : 'app-link'} to="/">Map</NavLink>
        <NavLink className={({isActive}) => isActive ? 'app-link app-link-orange' : 'app-link'} to="/capitals">Liste des Capitales</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Map capitals={capitals} setCapitals={setCapitals} />} />
        <Route path='/capitals' element={<Capitals capitals={capitals} setCapitals={setCapitals} />} />
      </Routes>
    </div>
  )
}

export default App
