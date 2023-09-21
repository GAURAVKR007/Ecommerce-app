import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { showData } from './utils/data';

import Navbar, { LeftSidebar } from './components/navbar/Navbar';
import Home from './components/homepage/Home';

function App() {
  const [data,setData] = useState(
    []
  )

  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(res=> {
      console.log(res.data.data);
      setData(res.data.data)
    }).catch(err=>{console.error(err)})
  },[])
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
