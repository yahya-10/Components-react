import React from 'react';
import logo from './logo.svg';
import ProfilPhoto  from "./Components/Profile/ProfilPhoto.js";
import FullName from './Components/Profile/FullName.js';
import Address from './Components/Profile/Address.js';
import './Components/Profile/style.css'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FullName />
        <Address />
        <ProfilPhoto />
      </header>
    </div>
  );
}

export default App;
