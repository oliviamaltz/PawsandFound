import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker } from 'react-leaflet';
import { Link, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Quiz from './Quiz';
import './Location.css'; // Import the CSS file for styling

// Custom icon for the map marker
const markerIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [41, 41],
});

function Location() {
  const [radius, setRadius] = useState(0); // Radius in meters
  const [position, setPosition] = useState([39.9526, -75.1652]); // Default to Philadelphia (latitude, longitude)
  
  // Maximum radius in miles, then converted to meters (1 mile ≈ 1609.34 meters)
  const maxRadiusInMiles = 15;
  const maxRadiusInMeters = maxRadiusInMiles * 1609.34;

  // Convert radius to miles for display
  const radiusInMiles = (radius / 1609.34).toFixed(1);

  return (
    <div className="location-page-container">
      <h2>Foster and Forever Homes</h2>
      <div className="map-wrapper">
        <MapContainer
          center={position}
          zoom={11}
          className="map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={markerIcon} />
          <Circle center={position} radius={radius} fillOpacity={0.2} />
        </MapContainer>
      </div>
      
      {/* <div className="buttons-container">
        <button className="location-button">Current Location</button>
        <button className="location-button">Different Location</button>
      </div> */}
      
      <h3>Choose Search Radius:</h3>
      <input
        type="range"
        min="0"
        max={maxRadiusInMeters}
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        className="slider"
      />
      <p>{radiusInMiles} miles</p>
      
      <Link to="/Quiz">
        <button className="btn-primary">Continue to Quiz</button>
      </Link>

      <Routes>
        <Route path="/Quiz/*" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default Location;
