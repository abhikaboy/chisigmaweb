
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
        <li><a href="https://twitter.com/julesforrest">Rush</a></li>
    <li><a href="https://codepen.io/julesforrest">Instagram</a></li>
    <li><a href="mailto:julesforrest@gmail.com">LinkedIn</a></li>
    <li><a href="https://dribbble.com/julesforrest">Facebook</a></li>
    <li><a href="https://github.com/julesforrest">Contact</a></li>
    <li>
      <p><img src={images.logo} alt = 'logo'/></p>
    </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
