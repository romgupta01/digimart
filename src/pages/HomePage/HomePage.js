
import CustomButton from "../../Components/CustomButton/CustomButton";
import COLOR from "../../Config/color";
import "./Styles.css";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import Testimonial from "../../Components/Testimonial/Testimonial";
import CustomNavbar from "../../Components/CustomNavBar/CustomNavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from 'react';
import Footer from "../../Components/Footer/Footer";



function HomePage() {
const [name,setName]=useState();
  const navigate = useNavigate();
  
   useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
     navigate("/login");
    }
  }, []);
  const sampleProducts = [
  { name: 'Product 1', price: 29.99, image: '/assets/watch.jpg' },
  { name: 'Product 2', price: 39.99, image: '/assets/p2.jpg' },
  { name: 'Product 3', price: 19.99, image: '/assets/p5.jpg' },
  { name: 'Product 4', price: 49.99, image: '/assets/12(1).jpg' },
];

    
    
  return (
    
    
    
      <div class="HomePageBaseContainer">

        
        <header>
<CustomNavbar/>


        </header>
        <div class="HomePageContentBaseContainer">
          <Outlet/>

<main>
        {/* Slider Section */}
<section class="slider">
     <ProductSlider products={sampleProducts} />
  </section>

        {/* New Section: Testimonials */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
         <Testimonial/>
         </section>

        {/* New Section: Blog Highlights */}
        <section className="blog-highlights">
          <h2>Latest Blog Posts</h2>
          <ul>
            <li><a href="/blog/post1">Blog Post 1</a></li>
            <li><a href="/blog/post2">Blog Post 2</a></li>
            <li><a href="/blog/post3">Blog Post 3</a></li>
          </ul>
        </section>
      </main>






          </div>
          <div className="footerContainer">
          <Footer/></div>
            
          
          </div>
  )
}
export default HomePage;
