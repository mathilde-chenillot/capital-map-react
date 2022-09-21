import { useState } from 'react'
import Capital from './capital/Capital'
import AddCapital from './addCapital/AddCapital.js'
import './capitals.css'

const Capitals = ({ capitals, setCapitals}) => {
  const [isAdding, setIsAdding] = useState(false)

  return (
    <main className='capitals-main'>
      <h1>Les capitales</h1>
      {/* Affiche le bouton pour ajouter une capitale */}
      {
        !isAdding && <button type='text' onClick={() => setIsAdding(true)}>Ajouter une capitale</button>
      }
      {/* Affiche le formulaire pour ajouter une capitale */}
      {
        isAdding && <AddCapital setIsAdding={setIsAdding} setCapitals={setCapitals}/>
      }
      {/* Affiche les capitales */}
      <div className='capitals-cards-container'>
        <div className='capitals-cards'>
          {
            capitals.map((capital) => (
              <Capital setCapitals={setCapitals} capital={capital} key={capital.id} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Capitals