import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import currentPositionPin from '../../src/maps.svg'

const Map = ({ capitals }) => {
  const currentPositionIcon = new L.Icon({
    iconUrl: currentPositionPin,
    iconSize: [32, 35],
  })

  const [currentUserPosition, setCurrentUserPosition] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentUserPosition([position.coords.latitude, position.coords.longitude])
    })
  }, [])

  return (
    <main className='leaflet-container'>
      <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          capitals.map((capital) => (
            // Si les lat et lg ne sont pas renseignées, ne met pas de marker sur la map
            capital.latlg && (
              <Marker position={capital.latlg} key={capital.id}>
                <Popup>
                  <h1>{capital.name}</h1>
                  <p>{capital.numberOfCitizens} habitants</p>
                </Popup>
              </Marker>
            )
          ))
        }
        {
          // Affiche la position du user si on l'a
          currentUserPosition.length && (
            <Marker position={currentUserPosition} icon={currentPositionIcon}>
              <Popup>
                <h1>Votre Position</h1>
              </Popup>
            </Marker>
          )
        }
      </MapContainer>
    </main>
  )
}

export default Map