// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import React from 'react';
import Header from './header.js';
import Menu from './menu.js';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="header">
      <Header />
      </div>
    </div>
  );
};


export default App;
