import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MapData from '../assets/data.example.json';
import '../assets/leaflet/css/MarkerCluster.css';
import '../assets/leaflet/leaflet.css';
import markerIconPath from '../assets/leaflet/images/marker-icon.png';
import OutputEvent from './OutputEvent';

function MapComponent() {
  const icon = new L.Icon({
    iconUrl: markerIconPath,
    iconRetinaUrl: markerIconPath,
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(27, 43),
    className: 'leaflet-default-icon-path custom-marker',
  });

  const outputMarkers = () => {
    const newMarkers = MapData.map((map) => {
      const { _id, latitude, longitude, label, locality, country, events } =
        map;
      const popup =
        typeof latitude !== 'undefined' && typeof longitude !== 'undefined' ? (
          <Popup>
            <div>
              <h6>
                {label}
                <br />
              </h6>
              <h6>{locality}</h6>
              <h6>{country} </h6>
              {events.map((map2) => OutputEvent(map2))}
            </div>
          </Popup>
        ) : null;
      return (
        <Marker icon={icon} key={_id} position={[latitude, longitude]}>
          {popup}
        </Marker>
      );
    });
    return newMarkers;
  };
  const markers = outputMarkers();

  console.log(markers);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Clericus Map</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="map-container">
            <MapContainer
              center={[53.37283, -6.5984]}
              zoom={7}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {markers}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
