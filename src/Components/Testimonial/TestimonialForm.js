import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase";
import ReactStars from "react-rating-stars-component"; // Optional for stars

export default function TestimonialForm() {
  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    quote: "",
    img: "",
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (newRating) => {
    setForm((prev) => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loading state
    try {
      const testimonialRef = ref(database, "testimonials");
      await push(testimonialRef, form);
      setSuccessMessage("Testimonial submitted successfully!");
      setForm({ fullName: "", jobTitle: "", quote: "", img: "", rating: 5 });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      setSuccessMessage("There was an error submitting your testimonial.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6"
    >
      {/* Header Section */}
      <header className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Share Your Testimonial</h2>
        <p className="text-gray-600">We’d love to hear your thoughts! Please fill out the form below.</p>
      </header>

      {/* Tabular Form Structure */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-l-2 border-gray-300 p-4">
        {/* Full Name Row */}
        <div className="flex flex-col border-b-2 border-r-2 border-gray-300 py-2">
          <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 pl-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Job Title Row */}
        <div className="flex flex-col border-b-2 border-r-2 border-gray-300 py-2">
          <label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 mb-2 pl-2">
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="Enter your job title"
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Image URL Row */}
        <div className="flex flex-col border-b-2 border-r-2 border-gray-300 py-2">
          <label htmlFor="img" className="text-sm font-medium text-gray-700 mb-2 pl-2">
            Image URL (Optional)
          </label>
          <input
            id="img"
            name="img"
            value={form.img}
            onChange={handleChange}
            placeholder="Paste an image URL (optional)"
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Testimonial Quote Row */}
        <div className="flex flex-col col-span-2 border-b-2 border-gray-300 py-2">
          <label htmlFor="quote" className="text-sm font-medium text-gray-700 mb-2 pl-2">
            Your Testimonial
          </label>
          <textarea
            id="quote"
            name="quote"
            value={form.quote}
            onChange={handleChange}
            placeholder="Write your testimonial here..."
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
            rows={4}
          />
        </div>
      </section>

      {/* Rating Section */}
      {/*<section className="border-t-2 border-l-2 border-gray-300 p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating:</label>
        <ReactStars
          count={5}
          size={24}
          value={form.rating}
          onChange={handleRatingChange}
          activeColor="#ffd700"
        />
      </section>*/}
     {/*<section className="border-t-2 border-l-2 border-gray-300 p-4">
  <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating:</label>

  
  <ReactStars
    count={5}
    size={30}  // Increased size for better visibility
    value={form.rating}
    onChange={handleRatingChange}
    activeColor="#FFD700"  // Golden color for active stars
    inactiveColor="#D3D3D3"  // Light gray color for inactive stars
    half={false}  // Disable half-star ratings (optional)
    onHover={(newRating) => console.log(`Hovering over rating: ${newRating}`)} // Optional hover feedback
    className="transition duration-300 ease-in-out transform hover:scale-110"  // Smooth transition and scale effect
    aria-label={`Rating: ${form.rating} stars`}  // Accessibility label
  />

  
  <div className="mt-2 text-sm text-gray-600">
    You rated {form.rating} {form.rating === 1 ? "star" : "stars"}.
  </div>
</section>
*/}
<section className="border-t-2 border-l-2 border-gray-300 p-4">
  <div className="flex items-center space-x-2">
    <label className="block text-sm font-medium text-gray-700">Your Rating:</label>
    <ReactStars
      count={5}
      size={30}
      value={form.rating}
      onChange={handleRatingChange}
      activeColor="#FFD700"
      inactiveColor="#D3D3D3"
      half={false}
      onHover={(newRating) => console.log(`Hovering over rating: ${newRating}`)}
      className="transition duration-300 ease-in-out transform hover:scale-110"
      aria-label={`Rating: ${form.rating} stars`}
    />
  </div>
  <div className="mt-2 text-sm text-gray-600">
    You rated {form.rating} {form.rating === 1 ? "star" : "stars"}.
  </div>
</section>


      {successMessage && (
        <div className="text-center text-sm font-medium text-green-600 mt-4">
          {successMessage}
        </div>
      )}

      {/* Submit Button Section */}
      <section className="mt-6">
        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="spinner-border spinner-border-sm text-white"></span>
          ) : (
            "Submit Testimonial"
          )}
        </button>
      </section>
    </form>
  );
}
