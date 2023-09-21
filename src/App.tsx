import React, { useState } from 'react';
import './App.css';

import { showData } from './utils/data';

import Navbar, { LeftSidebar } from './components/navbar/Navbar';
import Home from './components/homepage/Home';

function App() {
  const [data,setData] = useState(
    showData
  )
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <LeftSidebar />
        <Home data={data}/>
      </div>
    </div>
  );
}

export default App;
