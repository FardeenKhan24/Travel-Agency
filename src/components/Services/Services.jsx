import React from 'react'
import './Services.css'
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaConciergeBell,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane/>,
    title: "Flight Booking",
    description:
      "We provide easy and quick flight booking services to make your travel hassle-free.",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Booking",
    description:
      "Book hotels at the best prices with our exclusive deals and discounts. ",
  },
  {
    icon: <FaUmbrellaBeach  />,
    title: "Beach Tours",
    description:
      "Enjoy relaxing beach tours with all-inclusive packages and guided tours.",
  },
  {
    icon: <FaConciergeBell/>,
    title: "Concierge Services",
    description:
      "Get personalized concierge services for a seamless travel experience.",
  },
];

const Services = () => {
  return (
    <div className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Services;
