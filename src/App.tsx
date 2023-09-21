import React from 'react';
import './App.css';

import Navbar, { LeftSidebar } from './components/navbar/Navbar';
import Home from './components/homepage/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <LeftSidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
