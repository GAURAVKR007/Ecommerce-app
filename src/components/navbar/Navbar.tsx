import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
// style={{position : "fixed",zIndex : 100}}
function Navbar(props:any) {
  const { data } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = event.target.value; 
    data(newValue)
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    const newValue = event.target.value;
    data(newValue)
  }

  return (
    <div className="Nav">
      <div className="Nav-container" style={{position : "fixed",zIndex : 100 ,top : 0, right : 0, left : 0}}>
        <div className="companyLogo">
          <img src="/img/logo.png" alt="" className="logo" />
          {/* <i className="fa-solid fa-house fa-2xl"></i> */}
        </div>
        <div className="rightSide">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              autoComplete="off"
              onChange={handleChange}
            />
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="cart">
                <div className="totalPrice flex p-2 bg-blue-500" style={{borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}>
                    <h5 className="text-white">$0.00</h5>
                    
                </div>
                <div style={{borderTopRightRadius: "10px" , borderBottomRightRadius: "10px"}} className="bg-white p-2">
                    <h5>0</h5>
                </div>
                <i className="fa-solid fa-cart-shopping fa-2xl text-white ml-7"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeftSidebar(props:any) {
    return (
      <div className="left-sidebar" style={{marginTop: "100px"}}>
        <div className="sidebar">
      <ul>
      <li><Link to="/" onClick={()=> props.setMessage("http://localhost:3001/")}><i className="icon fa-solid fa-home fa-xl"></i> Home</Link></li>
        <li><Link to="/books" onClick={()=> props.setMessage("http://localhost:3001/books")}><i className="icon fa-solid fa-book fa-xl" ></i> BOOKS</Link></li>
        <li><Link to="/coffee-mugs" onClick={()=> props.setMessage("http://localhost:3001/coffee")}><i className="fa-solid fa-mug-hot fa-xl icon"></i> COFFEE MUGS</Link></li>
        <li><Link to="/mouse-pads" onClick={()=> props.setMessage("http://localhost:3001/mousepads")}><i className="fa-solid fa-square fa-xl icon"></i> MOUSE PADS</Link></li>
        <li><Link to="/luggage-tags" onClick={()=> props.setMessage("http://localhost:3001/luggagetags")}><i className="fa-solid fa-tags fa-xl icon"></i> LUGGAGE TAGS</Link></li>
      </ul>
    </div>
      </div>
    );
 }

export default Navbar;
