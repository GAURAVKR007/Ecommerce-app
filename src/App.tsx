import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, useLocation } from "react-router-dom"
import { showData } from './utils/data';

import Navbar, { LeftSidebar } from './components/navbar/Navbar';
import Home from './components/homepage/Home';

function App() {
  const [data,setData] = useState<{ id: number; title: string }[]>(
    []
  )

  const [filterData,setFilterData] = useState<{ id: number; title: string }[]>([])

  const [searchVal,setSearch] = useState("");

  const[purchased,setPurchased] = useState<{ id: number; title: string }[]>([]);

  const handlePurchase = (item:any) => {
    setPurchased((prev:any) => {
      return [...prev, item];
    });

    console.log(purchased)
    
  }

  function searchFunction (data: string) {
    setSearch(data)
    console.log(searchVal);
    
  }

  useEffect(()=>{
    axios.get(`http://localhost:3001/books`)
    .then(res=> {
      setData(res.data)
    }).catch(err=>{console.error(err)})
  },[])

  useEffect(() => {
    // Filter data based on searchQuery
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    
    if(searchVal.length > 0){
      setFilterData(filtered);
    }else{
      setFilterData(data)
    }
    
  }, [searchVal, data]);

  const setLinkData = (data:String) => {
      axios.get(`${data}`)
      .then(res=> {
        setData(res.data)
      }).catch(err=>{console.error(err)})
      
  }

  return (
    <div className="App">
      <Navbar data={searchFunction} purchaseData={purchased}/>
      <div className="main">
        <LeftSidebar setMessage={setLinkData}/>
        <Home data={filterData} purchase={handlePurchase}/>
      </div>
    </div>
  );
}

export default App;
