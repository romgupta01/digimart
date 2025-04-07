import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate=useNavigate()
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Welcome to DigiMart</h1>
        <p>Your one-stop shop for all electronic needs!</p>
        <button className="shop-btn" onClick={() => navigate("/product")}>Shop Now</button>
        
      </header>

      <section className="features">
        <div className="feature">
          <h3>Free Shipping</h3>
          <p>Get free shipping on orders above ₹999.</p>
        </div>
        <div className="feature">
          <h3>Secure Payment</h3>
          <p>100% secure payment with multiple options.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>We are here to help you anytime.</p>
        </div>
      </section>

      <section className="promo">
        <h2>Exclusive Deals</h2>
        <p>Get up to 50% off on select products.</p>
        <button className="explore-btn">Explore Now</button>
      </section>

      <footer className="footer">
        <p>© 2025 DigiMart. All Rights Reserved.</p>
      </footer>
      
    </div>
    
  

  );
}


export default LandingPage;
