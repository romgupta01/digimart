import React from 'react';
import "./style.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">DigitalNest</h2>
          <p className="text-gray-400 text-sm mb-4">
            Premium digital tools & templates for creators, designers, and developers.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-400" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Stay updated with product drops & deals.</p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l sm:rounded-none sm:rounded-l-md w-full text-black"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-blue-500 text-white px-4 py-2 rounded sm:rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 DigitalNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
