import React, { useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { FaCloudSun, FaNewspaper, FaClock, FaHeart } from 'react-icons/fa';
import './App.css';

const App = () => {
  const globeEl = useRef();
  const [locations, setLocations] = useState([
    { lat: 40.7128, lng: -74.006, city: 'New York' },
    { lat: 51.5074, lng: -0.1278, city: 'London' },
    { lat: 35.6895, lng: 139.6917, city: 'Tokyo' }
  ]);
  const [selected, setSelected] = useState(null);

  const handleClick = (loc) => {
    setSelected(loc);
    globeEl.current.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 1.5 }, 1000);
  };

  return (
    <div className="app">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="black"
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => 'red'}
        pointAltitude={0.05}
        onPointClick={handleClick}
      />

      <div className="sidebar">
        <h2>🧭 FantasyGlobe</h2>
        {selected ? (
          <div className="info">
            <h3>{selected.city}</h3>
            <p><FaCloudSun /> Weather: Loading...</p>
            <p><FaNewspaper /> News: Loading...</p>
            <p><FaClock /> Local Time: Loading...</p>
            <p><FaHeart /> <button>Save to Favorites</button></p>
          </div>
        ) : (
          <p>Click a red dot to begin your quest 🧙</p>
        )}
      </div>
    </div>
  );
};

export default App;
