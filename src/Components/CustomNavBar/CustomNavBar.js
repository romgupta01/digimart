import "./styles.css";
import { FcMoneyTransfer } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";

import { Link } from "react-router-dom";
import React, { useState } from "react";

import {  FaUser } from "react-icons/fa";
import cart from "../Cart/Cart";






import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import COLOR from "../../Config/color";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import { FaSearch } from "react-icons/fa";



function CustomNavbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem("uid");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  


  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/login");
  };

  
  const links = [
    { title: "Home", path: "/home" },
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/product" },
    { title: "Service", path: "/service" },
  ];

  return (
    <div className="customNavbarBaseContainer">
      <div className="customNavbarLogoContainer">
      
        
        
      
  
      <FcMoneyTransfer size={40} color={COLOR.whiteColor} />
      
      
      




        
          
    
        <h1>Digimart</h1>
        <div className="fasearch">
        <FaSearch size={20} color={COLOR.whiteColor} />
        </div>
        


        

        <div className="searchbar">
      <input
        type="text"
        placeholder="Search products..."
        
        
      
      />


        
      </div>

        



    
      </div>
      <div className="customNavbarLinkContainer">
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
        
      </div>
      <div className="CustomNavbarlogincontainer">
      <li onClick={handleLoginClick} className="login-icon">
          <CiLogin size={40} color={COLOR.whiteColor}
          className="icon" />
          <span>{isLoggedIn ? "Logout" : "Login"}</span>
        </li>


      

      







      </div>
      <div className="customNavbarProfileContainer">
        <FaCircleUser 
          size={40}
          color={COLOR.blackColor}
          onClick={() => navigate("/profile")}
        />
        
        
      
      
    

                  
        
        {email} 
        <div className="shopingcartcontainer"onClick={navigate}>
        
    
      
                 

  
    

        <FaShoppingCart size={40}/>

        </div>

   
        
      </div>
    </div>
  );
}

export default CustomNavbar;