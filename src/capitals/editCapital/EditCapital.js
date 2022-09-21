import { useState } from 'react'
import './edit-capital.css'

const EditCapital = ({setIsModifying, capital, setCapitals}) => {
  const [name, setName] = useState(capital.name)
  const [numberOfCitizens, setNumberOfCitizens] = useState(capital.numberOfCitizens)
  const [country, setCountry] = useState(capital.country)

  const handleSubmit = (e) => {
    e.preventDefault()
    const {latlg} = capital ? capital : []
    const {id} = capital
    const updatedCapital = { id, name, numberOfCitizens, country, latlg }
    setCapitals((capitals) => capitals.map((cap) => cap.id === updatedCapital.id ? updatedCapital : cap))
    setIsModifying(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Capitale :
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-input"
          required
        />
      </label>
      <label>
        Pays :
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="edit-input"
          required
        />
      </label>
      <label>
        Nombre d'habitants :
        <input
          type="text"
          name="numberOfCitizens"
          value={numberOfCitizens}
          onChange={(e) => setNumberOfCitizens(e.target.value)}
          className="edit-input"
          required
      />
      </label>
      <button
        type="submit"
      >
        Enregistrer
      </button>
    </form>
  )
}

export default EditCapital