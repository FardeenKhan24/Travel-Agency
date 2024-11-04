import React from 'react'
import './Reviews.css'

const clients = [
  {
    name: "John Doe",
    image: "/images/me2.png",
    text: "These travel agency provided excellent service and helped us plan the perfect vacation. Highly recommended!",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    image: "/images/me.png",
    text: "Amazing experience! The tour guides were knowledgeable and the destinations were breathtaking.",
    location: "London, UK",
  },
  {
    name: "Georgia Miller",
    image: "/images/me3.png",
    text: "Great customer service and fantastic travel packages. Will definitely book with them again.",
    location: "Sydney, Australia",
  },
];

const Reviews = () => {
  return (
    <div className="testimonials-section">
        <h2 className="testimonials-title">What our Clients Say</h2>
        <div className="testimonials-grid">
          {clients.map((client, index) => (
            <div key={index} className="testimonial-card">
              <img src={client.image} alt="" className="client-image" />
              <h3 className="client-name">{client.name}</h3>
              <p className="client-location">{client.location}</p>
              <p className="client-text">{client.text}</p>
            </div>
          ))}
        </div>
    </div>
  );
};


export default Reviews
