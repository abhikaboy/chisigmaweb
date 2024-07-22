import React, { useState } from 'react';
import { images } from 'theme';
import './tabs.scss'; // Ensure you have this SCSS file with the provided styles

  const imageData = [
    { id: 'Μ', graduates: [{ url: '/path/to/image1.jpg', name: 'Alice', major: 'Computer Science' }] },
    { id: 'Ν', graduates: [{ url: '/path/to/image3.jpg', name: 'Charlie', major: 'Business' }] },
    { id: 'Ξ', graduates: [{ url: '/path/to/image1.jpg', name: 'Alice', major: 'Computer Science' }] },
    { id: 'Ο', graduates: [{ url: '/path/to/image1.jpg', name: 'Alice', major: 'Computer Science' }] },
    { id: 'Ρ', graduates: [{ url: images.alison, name: 'Alison Ong', major: 'Business/Design' },{ url: images.wilson, name: 'Wilson', major: 'Computer Science' },
    { url: images.daniel, name: 'Daniel Penjamin', major: 'Business' },{ url: images.caleb, name: 'Kaleeey', major: 'Business' },{ url: images.ben, name: 'benchetta', major: 'Computer Science' }] },
    { id: 'Σ', graduates: [{ url: '/path/to/image1.jpg', name: 'Alice', major: 'Computer Science' }] },

    // Add more tabs and graduates as needed
  ];

  const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab-a');
    // Placeholder for filtering logic
    // const [activeFilter, setActiveFilter] = useState(null);
  
    const allGraduates = imageData.reduce((acc, curr) => [...acc, ...curr.graduates], []);
  
    const displayedGraduates = activeTab === 'all' ? allGraduates : imageData.find(tab => tab.id === activeTab)?.graduates || [];
  
    return (
      <div className="tabs-container">
        <div className="tabs-titles">
          {imageData.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.id.toUpperCase()}
            </button>
          ))}
          <button className="tab-button" onClick={() => setActiveTab('all')} type="button">
            Show All
          </button>
        </div>
        <div className="tabs-content">
          {displayedGraduates.map((graduate) => (
            <div
              key={`${graduate.name}-${graduate.url}`} // Unique key for each graduate
              className="content"
            >
              <img src={graduate.url} alt={graduate.name} />
              <p className="graduate-name">{graduate.name} - {graduate.major}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Tabs;