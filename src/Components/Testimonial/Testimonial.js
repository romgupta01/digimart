// components/Testimonial.jsx
import React from 'react';
import "./styles.css";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Happy Customer",
    quote: "This is the best online store I've ever used. The products are amazing and delivery is super fast!",
    image: "/images/user1.jpg",
  },
  {
    name: "John Smith",
    title: "Verified Buyer",
    quote: "Great quality and excellent customer service. Highly recommended!",
    image: "/images/user2.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Loyal Client",
    quote: "I keep coming back for more. The user experience is top-notch!",
    image: "/images/user3.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-gray-600 italic mb-3">“{t.quote}”</p>
            <h4 className="font-bold text-lg">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
