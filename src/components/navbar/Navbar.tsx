import React, { useState } from "react";
import './Navbar.css';
// style={{position : "fixed",zIndex : 100}}
function Navbar(props:any) {
  const { data } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = event.target.value; // Get the new value from the event
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

export function LeftSidebar() {
    return (
      <div className="left-sidebar" style={{marginTop: "100px"}}>
        <div className="sidebar">
      <ul>
        <li><a href="/"><i className="icon fa-solid fa-book fa-xl"></i> BOOKS</a></li>
        <li><a href="/about"><i className="fa-solid fa-mug-hot fa-xl icon"></i> COFFEE MUGS</a></li>
        <li><a href="/services"><i className="fa-solid fa-square fa-xl icon"></i> MOUSE PADS</a></li>
        <li><a href="/contact"><i className="fa-solid fa-tags fa-xl icon"></i> LUGGAGE TAGS</a></li>
      </ul>
    </div>
      </div>
    );
 }

export default Navbar;
