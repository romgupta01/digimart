
import CustomButton from "../../Components/CustomButton/CustomButton";
import COLOR from "../../Config/color";
import "./Styles.css";


import CustomNavbar from "../../Components/CustomNavBar/CustomNavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from 'react';



function HomePage() {
const [name,setName]=useState();
  const navigate = useNavigate();
  
   useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
     navigate("/login");
    }
  }, []);
    
    
  return (
    
    
    
      <div class="HomePageBaseContainer">

        
        <div class="HomePageLogoContainer">
          <CustomNavbar />
        </div>
        <div class="HomePageContentBaseContainer">
          <Outlet/>
          </div>
          </div>
  )
}
export default HomePage;
