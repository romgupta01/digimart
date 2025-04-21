
// components/TestimonialSection.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";

import Testimonial from "./Testimonial";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const testimonialRef = ref(database, "testimonials/");
    onValue(testimonialRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data ? Object.values(data) : [];
      setTestimonials(loaded.reverse());
    });
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Testimonial key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
