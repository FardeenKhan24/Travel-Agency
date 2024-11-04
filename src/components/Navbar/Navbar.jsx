import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const ToggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container">
      <div>
        <h1>TripCrafters</h1>
      </div>
      <div className="ham" onClick={ToggleMenu}>
        {menu ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
      <div>
        <ul className={menu ? "active" : "close"}>
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-50}
          
          >
            Home
          </Link>
          <Link
            to="popular"
            smooth={true}
            duration={800}
            offset={-50}
            
          >
            Popular Destination
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={800}
            offset={-50}
            
          >
            Services
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={800}
            offset={-50}
            
          >
            Reviews
          </Link>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
