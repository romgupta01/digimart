// components/Testimonial.jsx
import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function Testimonial({ fullName, jobTitle, quote, img, rating }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <img src={img || "/images/default-avatar.png"} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" alt={fullName} />
      <h3 className="font-bold text-lg">{fullName}</h3>
      <p className="text-sm text-gray-500">{jobTitle}</p>
      <p className="text-gray-600 italic my-3">“{quote}”</p>
      <div className="text-yellow-500 flex justify-center">
        {[...Array(rating)].map((_, i) => <BsStarFill key={i} className="mr-1" />)}
      </div>
    </div>
  );
}

















































{/* components/Testimonial.jsx
import React from 'react';
import "./styles.css";
import { BsTwitter,BsStar } from "react-icons/bs";
import COLOR from "../../Config/color";

export default function Testimonial({
  img, 
  fullName="Full Name",
  jobtitle="Job Title",
  twiterhanadle="twiterhanadle",

  text="text" ,
  ratings
})
{
  return (
    <div calassName="card testimoonial in-view">
      <div calssName="card-header">
        <div ClasName="{`card-img ${img}`}"></div>
        <div className="card-body">
          <h3 className="card-title">{fullName}</h3>
          <p ClasName="card-text">{jobtitle}</p>


          <div>
            <BsTwitter size={20} color={COLOR.whiteColor} />
            {twiterhanadle}
            </div>
          </div>
          </div>
<div className="card-body">
  <p className="card-text">{text}
</p>
     


      </div>

<div className="card-footer d-flex" style={{ course: "pointer"}}>
  <BsStar className="mr-1"/> <BsStar className="mr-1" />
  <BsStar className="mr-1"/> <BsStar className="mr-1" />
  <BsStar className="mr-1"/>

</div>





    </div>
  );
}

/*}


{/*const testimonials = [
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
*/}