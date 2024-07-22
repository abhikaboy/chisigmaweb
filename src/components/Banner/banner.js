import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { images } from 'theme'; // Update the path as necessary
import './banner.scss'; // Import the SCSS module for this component

const Banner = () => (
  <div className='logoBanner'>
    <div className="sapphireContainer left">
      <img src={images.sapphireTexture} alt="Decorative Graphic" className="sapphire" />
    </div>
    <div className='logoLink'>
      {/* Wrap the CSC logo in a NavLink */}
      <NavLink to="/your-desired-path"> {/* Update '/your-desired-path' as needed */}
        <img src={images.cscLogo} alt="CSC Logo" className='nav-logo'/>
      </NavLink>
    </div>
    <div className="sapphireContainer right">
      <img src={images.sapphireTexture} alt="Decorative Graphic" className="sapphire" />
    </div>
  </div>
);

export default Banner;

