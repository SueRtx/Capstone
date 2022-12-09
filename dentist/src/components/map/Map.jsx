import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[45.473701, -123.843643]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[45.473701, -123.843643]}>
        <Popup>Tillamook Family Dentistry</Popup>
      </Marker>

       {/* address box */}
      <div className="map-content">
        <h3 className="switch__color">Tillamook Family Dentistry</h3>
        
        <span>2503 Main Ave N</span>
        <br />
        <span>Tillamook, OR 97141</span>
        
      </div>
    </MapContainer>
    
    
    
  )
}

export default Map