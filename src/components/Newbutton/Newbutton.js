import React from 'react';
import './Newbutton.scss'; // Adjust the path if necessary

const Newbutton = ({ text, onClick, className }) => (
  <button type="button" className={`customButton ${className || ''}`} onClick={onClick}>
    {text}
  </button>
);

export default Newbutton;
