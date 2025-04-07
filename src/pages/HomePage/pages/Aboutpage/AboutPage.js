import React from "react";
import  "./styles.css";


const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>DigiMart</strong>, your one-stop destination for quality products. 
        We strive to provide the best online shopping experience with a wide range of products 
        at affordable prices.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make online shopping seamless, secure, and enjoyable. 
        We bring top-notch products from trusted brands to your doorstep.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>✔ High-quality products</li>
        <li>✔ Secure payments</li>
        <li>✔ Fast and reliable delivery</li>
        <li>✔ Excellent customer support</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        📧 Email: support@digimart.com <br />
        📞 Phone: 6283138384
      </p>
    </div>
  );
};

export default AboutPage;