import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.scss';

import MapComponent from './components/Map';

function App() {
  return (
    <div className="main-app">
      <MapComponent />
    </div>
  );
}

export default App;
