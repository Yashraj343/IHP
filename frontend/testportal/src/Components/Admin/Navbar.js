

import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo2 from '../../Assets/whirpool7915.jpg';
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Navbar.css"; // Import the CSS file for styling
// import profilePic from "./profile-pic.png"; 
import logo from '../../Assets/logout.png';
import chart from '../../Assets/chart.png';
import res from '../../Assets/result (2).png';
import pas from '../../Assets/pass.png';
// import home from '../../Assets/Home-icon.png';
import paper from '../../Assets/question.png';
const Navbar = ({ onLogout }) => {
  
const navigate = useNavigate();

const handleLogout = () => {
  console.log(localStorage.clear());
  navigate('/adminlogin');
}
const toResult = () => {
  
  navigate('/Result');
}
const topass=()=>
{
  navigate('/password');
}
// const toHome=()=>{
//   navigate('/admin');
// }
const toPaper=()=>{
  navigate('/admin');
}
const toChart=()=>{
  navigate('/chart');
}
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img  style={{height:"10%",width:"20%",padding:"0px"}} src={logo2} />
      </div>
      <div className="navbar-left">
        
        
      </div>
      <div className="navbar-right">
      <span><b>Welcome, Admin!</b></span>
          <button className="icon-button" title='Upload Questions' aria-label="Home" onClick={toPaper}>
            <img src={paper} />
          </button>
      <button className="icon-button" title='Result' aria-label="result" onClick={toResult}>
            <img src={res} />
          </button>
          <button className="icon-button" title='Statistics' aria-label="chart" onClick={toChart}>
            <img src={chart} />
          </button>
      <button className="icon-button" title='Change Password' aria-label="password" onClick={topass}>
          <img src={pas} />
      </button>
      <button className="icon-button" title='Logout' aria-label="Logout" onClick={handleLogout}>
            <img src={logo} />
          </button>
      </div>
    </nav>
  );
};

export default Navbar;