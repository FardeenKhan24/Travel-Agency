import React from 'react'
import './Popular.css'

const destinations = [
  {
    image: "/images/gal1.jpg",
    title: "Paris, France",
    description:
      "The City of Lights draws millions of visitors every year with its unforgettable ambiance.",
  },
  {
    image: "/images/gal2.jpg",
    title: "Bali, Indonesia",
    description:
      "Bali is a living postcard, an Indonesian paradise that feels like a fantasy.",
  },
  {
    image: "/images/gal3.png",
    title: "New York, USA",
    description:
      "New York City is the largest city in the United States and home to many world famous attractions.",
  },
  {
    image: "/images/gal4.jpg",
    title: "Tokyo, Japan",
    description:
      "Tokyo offers a seemingly unlimited choice of entertainment, shopping, cultural attractions and dining.",
  },
];


const Popular = () => {
 
  return (
    <div>
      <h1 className='main'>Popular Destinations</h1>
      <div className="destinations-container">
        {destinations.map((city, index) => (
          <div key={index} className="city-card">
            <img src={city.image} alt={city.title} className="city-image" />
            <div>
              <h3 className="city-title">{city.title}</h3>
              <p className="city-description">{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
