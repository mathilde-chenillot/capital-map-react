import { useState } from 'react'
import EditCapital from '../editCapital/EditCapital'
import './capital.css'

const Capital = ({ setCapitals, capital }) => {
  const [isModifying, setIsModifying] = useState(false)
  
  const removedCapital = (id) => {
    setCapitals((capitals) => capitals.filter((capital) => capital.id !== id))
  }

  return (
    <div className="capital-card">
      {
        isModifying ?
        // Affiche le formulaire de mise à jour de la capitale
        (
          <EditCapital setIsModifying={setIsModifying} capital={capital} setCapitals={setCapitals} />
        ) : (
          // Affiche les infos
          <div>
            <h2 className='capital-name'>{capital.name}</h2>
            <p>{capital.country}</p>
            <p>{capital.numberOfCitizens}</p>
            <div className='capital-buttons'>
              <button onClick={() => setIsModifying(!isModifying)}>Modifier</button>
              <button onClick={() => removedCapital(capital.id)}>Supprimer</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Capital