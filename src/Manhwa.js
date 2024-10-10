import React from 'react';

function Manhwa({ title, image, description }) {
  return (
    <div className="manhwa">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Manhwa;