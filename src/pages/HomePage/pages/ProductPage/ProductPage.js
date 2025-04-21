
import React, { useState } from "react";
import "./styles.css";
import { ref, push } from "firebase/database";
import { database } from "./../../../../firebase"; // Adjust path as needed

const products = [
  { id: 1, name: "iphone16", price: 999.99, image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg" },
  { id: 2, name: "macbook", price: 123.99, image: "https://idestiny.in/wp-content/uploads/2024/10/MacBook_Air_13_in_M3_Starlight_PDP_Image_Position_1__en-IN-copy-600x600.jpg" },
  { id: 3, name: "tablet", price: 700.99, image: "https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg" },
  { id: 4, name: "headfone", price: 19.99, image: "https://images-cdn.ubuy.co.in/6357f8331c465829615c87d2-iphone-headphones-wired-lightning.jpg" },
  { id: 5, name: "led", price: 500.99, image: "https://m.media-amazon.com/images/I/71JQ3kUrR9L.jpg" },
  { id: 6, name: "speaker", price: 49.99, image: "https://arcticfox.com/cdn/shop/files/8_b5937b5b-8c26-4450-a248-3162a20e83a3.jpg?v=1706020146" },
  { id: 7, name: "mouse", price: 49.99, image: "https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, name: "Samsungultra24", price: 890.99, image: "https://image-us.samsung.com/us/smartphones/galaxy-s25/Gallery/PA3/PA3-01-TitaniumGray-1600x1200.jpg?$default-400-jpg$" },
  { id: 9, name: "1+ phone", price: 400.99, image: "https://image01-in.oneplus.net/media/202412/19/69f2d3e8d905b936f707bb1b317ba4b9.png?x-amz-process=image/format,webp/quality,Q_80" },
  { id: 10, name: "marsal", price: 300.99, image: "https://images.ctfassets.net/javen7msabdh/4D50LWiNN6uf0MYveGHnsj/b26a92e4f966d609af93436428a5a69c/kilburn-ii-black-and-brass-plp.jpeg" },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);

    const cartRef = ref(database, "cart");
    push(cartRef, {
      ...product,
      addedAt: new Date().toISOString(),
    })
      .then(() => {
        console.log(`✅ ${product.name} added to Firebase`);
      })
      .catch((err) => {
        console.error("❌ Firebase error:", err);
      });
  };

  return (
    <div className="product-page">
      <h1>SOME OTHER Products FOR YOU</h1>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart ({cart.length} items)</h2>
      <div className="cart">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
            />
            <div>
              <p><strong>{item.name}</strong></p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;






{/*import React, { useState } from "react";
import "./styles.css";
import { database } from "./../../../../firebase"; // Make sure firebase.js is set up
import { getDatabase, ref, push } from "firebase/database";


const products = [
  { id: 1, name: "iphone16", price: 999.99, image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg" },
  

  { id: 2, name: "macbook", price: 123.99, image: "https://idestiny.in/wp-content/uploads/2024/10/MacBook_Air_13_in_M3_Starlight_PDP_Image_Position_1__en-IN-copy-600x600.jpg" },
  { id: 3, name: "tablet", price: 700.99, image: "https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg" },

  { id: 4, name: "headfone", price: 19.99, image: "https://images-cdn.ubuy.co.in/6357f8331c465829615c87d2-iphone-headphones-wired-lightning.jpg" },

  { id: 5, name: "led", price: 500.99, image: "https://m.media-amazon.com/images/I/71JQ3kUrR9L.jpg" },
  { id: 6, name: "speaker", price: 49.99, image: "https://arcticfox.com/cdn/shop/files/8_b5937b5b-8c26-4450-a248-3162a20e83a3.jpg?v=1706020146" },
  { id: 7, name: "mouse", price: 49.99, image: "https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, name: "Samsungultra24", price: 890.99, image: "https://image-us.samsung.com/us/smartphones/galaxy-s25/Gallery/PA3/PA3-01-TitaniumGray-1600x1200.jpg?$default-400-jpg$" },
  { id: 9, name: "1+ phone", price: 400.99, image: "https://image01-in.oneplus.net/media/202412/19/69f2d3e8d905b936f707bb1b317ba4b9.png?x-amz-process=image/format,webp/quality,Q_80" },
  { id: 10, name: "marsal", price: 300.99, image: "https://images.ctfassets.net/javen7msabdh/4D50LWiNN6uf0MYveGHnsj/b26a92e4f966d609af93436428a5a69c/kilburn-ii-black-and-brass-plp.jpeg" },






  


];
const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);

    // Save to Firebase
    const cartRef = ref(database, "cart");
    push(cartRef, {
      ...product,
      addedAt: new Date().toISOString()
    })
    .then(() => {
      console.log("Added to Firebase:", product.name);
    })
    .catch((err) => {
      console.error("Firebase Error:", err);
    });
  };

  return (
    <div className="product-page">
      <h1>SOME OTHER Products FOR YOU</h1>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart ({cart.length} items)</h2>
      <div className="cart">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }} />
            <div>
              <p><strong>{item.name}</strong></p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;*/}
