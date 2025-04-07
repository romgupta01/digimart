import React from 'react';
import './styles.css';
import {
  FaShippingFast,
  FaHeadset,
  FaUndo,
  FaLock,
  FaGift,
  FaMapMarkedAlt,
  FaTags,
  FaMobileAlt,
  FaStar,
  FaMedal,
  FaClock,
  FaLeaf,
  FaBalanceScale,
  FaComments,
  FaCreditCard,
  FaShieldAlt,
  FaPencilRuler,
  FaBoxes,
  FaUserFriends,
  FaStore,
} from 'react-icons/fa';

const services = [
  { icon: <FaShippingFast />, title: 'Free Shipping', description: 'Enjoy free shipping on all orders above $50.' },
  { icon: <FaHeadset />, title: '24/7 Customer Support', description: 'We are available round the clock to assist you.' },
  { icon: <FaUndo />, title: 'Easy Returns', description: 'Not satisfied? Return products easily within 30 days.' },
  { icon: <FaLock />, title: 'Secure Payments', description: 'Your transactions are protected with top security.' },
  { icon: <FaGift />, title: 'Gift Wrapping', description: 'Special gift wrapping available on request.' },
  { icon: <FaMapMarkedAlt />, title: 'Track Orders', description: 'Real-time order tracking from your dashboard.' },
  { icon: <FaTags />, title: 'Exclusive Deals', description: 'Members get access to exclusive discounts and offers.' },
  { icon: <FaMobileAlt />, title: 'Mobile App', description: 'Shop on the go with our easy-to-use mobile app.' },
  { icon: <FaStar />, title: 'Product Recommendations', description: 'Get personalized product suggestions.' },
  { icon: <FaMedal />, title: 'Loyalty Program', description: 'Earn points on every purchase and redeem for rewards.' },
  { icon: <FaClock />, title: 'Same Day Delivery', description: 'Get your orders delivered the same day (select areas).' },
  { icon: <FaLeaf />, title: 'Eco-Friendly Packaging', description: 'We use sustainable and recyclable materials.' },
  { icon: <FaBalanceScale />, title: 'Price Match Guarantee', description: 'We match prices if you find it cheaper elsewhere.' },
  { icon: <FaComments />, title: 'Live Chat Support', description: 'Get answers instantly through live chat.' },
  { icon: <FaCreditCard />, title: 'Installment Payments', description: 'Pay in easy installments with no interest.' },
  { icon: <FaShieldAlt />, title: 'Warranty Service', description: 'We provide extended warranties on select products.' },
  { icon: <FaPencilRuler />, title: 'Product Customization', description: 'Customize select products to your liking.' },
  { icon: <FaBoxes />, title: 'Bulk Orders', description: 'Special discounts on bulk or corporate orders.' },
  { icon: <FaUserFriends />, title: 'Affiliate Program', description: 'Earn by promoting our products through referrals.' },
  { icon: <FaStore />, title: 'Marketplace Access', description: 'List your products on our platform with ease.' },
];

const ServicePage = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">{service.icon}</div>
            </div>
            <h2 className="service-card-title">{service.title}</h2>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
