import React from 'react';
import './logobar.scss';

// Example array of image URLs (replace with your actual image paths)
const Logobar = ({ imageUrls, cName }) => (
    <div className="logoAnimationBar">
      {[...Array(2)].flatMap((_, iteration) => (
        imageUrls.map((url) => (
          <img 
            key={`${url}-${iteration}`}
            src={url}
            alt="Company Logo"
            className={cName}
          />
        ))
      ))}
    </div>
);

export default Logobar;