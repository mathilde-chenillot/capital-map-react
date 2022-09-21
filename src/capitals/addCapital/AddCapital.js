import { useState } from 'react'
import './add-capital.css'

const AddCapital = ({ setIsAdding, setCapitals }) => {
  const [name, setName] = useState('')
  const [numberOfCitizens, setNumberOfCitizens] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCapital = {
      id: Date.now(),
      name,
      numberOfCitizens,
      country,
    }
    setCapitals((capitals) => [...capitals, newCapital])
    setName('')
    setNumberOfCitizens('')
    setCountry('')
    setIsAdding(false)
  }
  
  return (
    <form onSubmit={handleSubmit} className="add-form">
      {/* Name */}
      <label htmlFor="name">Capitale :
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      {/* Number of citizens */}
      <label htmlFor="numberOfCitizens">Nombre d'habitants :
        <input
          type="text"
          id="numberOfCitizens"
          name="numberOfCitizens"
          value={numberOfCitizens}
          onChange={(e) => setNumberOfCitizens(e.target.value)}
          required
        />
      </label>
      {/* Country */}
      <label htmlFor="country">Nom du pays :
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>
      <button type='submit'>Enregistrer</button>
    </form>
  )
}

export default AddCapital