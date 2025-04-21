// components/ProductSlider.jsx
import React from 'react';
import Slider from 'react-slick'; // Corrected the component name here
import "./styles.css";

const ProductSlider = ({ products, addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // You can change this for responsiveness
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Best In Market</h2>
      <Slider {...settings}> {/* Corrected this line */}
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img src={product.image} alt={product.name} className="product-card" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                className="cart-button"
                onClick={() => addToCart(product)} // This triggers addToCart when clicked
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
