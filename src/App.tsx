import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';

function App() {
  return (
    <div className="App">
      <MapContainer center={[55.76239378474318, 37.85664198038579]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[55.76239378474318, 37.85664198038579]}>
          <Popup>
            Реутов - Наукоград!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
