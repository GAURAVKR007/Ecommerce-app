import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { showData } from './utils/data';

import Navbar, { LeftSidebar } from './components/navbar/Navbar';
import Home from './components/homepage/Home';

function App() {
  const [data,setData] = useState<{ id: number; title: string }[]>(
    []
  )

  const [filterData,setFilterData] = useState<{ id: number; title: string }[]>([])

  const [searchVal,setSearch] = useState("");

  function searchFunction (data: string) {
    setSearch(data)
    console.log(searchVal);
    
  }

  useEffect(()=>{
    axios.get(`http://localhost:3001/`)
    .then(res=> {
      console.log(res);
      setData(res.data)
    }).catch(err=>{console.error(err)})
  },[])

  useEffect(() => {
    // Filter data based on searchQuery
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log(searchVal.length);
    
    if(searchVal.length > 0){
      setFilterData(filtered);
    }else{
      setFilterData(data)
    }
    console.log(filterData);
    
  }, [searchVal, data]);

  return (
    <div className="App">
      <Navbar data={searchFunction}/>
      <div className="main">
        <LeftSidebar />
        <Home data={filterData}/>
      </div>
    </div>
  );
}

export default App;
