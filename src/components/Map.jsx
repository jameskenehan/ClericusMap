import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import '../assets/leaflet/css/MarkerCluster.css';
import '../assets/leaflet/leaflet.css';
import markerIconPath from '../assets/leaflet/images/marker-icon.png';

function MapComponent() {
  const position = [53.3497645, -6.2602732];

  const markerIcon = new L.Icon({
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
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={markerIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MapComponent;
