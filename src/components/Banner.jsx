import React from 'react';
import './banner.css';

const Banner = () => {
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className='banner'>
      <div className='scrolling-content'>
        {items.map((item, index) => (
          <div className='item' key={index}>{item}</div>
        ))}
        {/* Duplicate the items for seamless scrolling */}
        {items.map((item, index) => (
          <div className='item' key={index + items.length}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Banner;