
import React, { useState, useEffect } from 'react';
import { images } from 'theme';
import './footer.scss';

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust this value as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${scrolled ? 'solidBackground' : 'transparentBackground'}`}>
      <div>
        <ul>
    <li style={{flexDirection: "row", display: "flex", alignItems: "center"}}>
      <p><img src={images.logo} alt = 'logo'/></p>
      <p style={{color: "white", fontSize: '0.8rem'}}>akpsi@northeastern.edu</p>
    </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
