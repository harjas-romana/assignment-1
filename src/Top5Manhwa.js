import React, { useState, useEffect } from 'react';
import Manhwa from './Manhwa';

function Top5Manhwa() {
  const [manhwas, setManhwas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/manhwas')
      .then(response => response.json())
      .then(data => setManhwas(data));
  }, []);

  return (
    <div className="container">
      <h1>Top 5 Fantasy Manhwa</h1>
      <ul>
        {manhwas.map((manhwa, index) => (
          <li key={manhwa.id}>
            <Manhwa title={manhwa.title} image={manhwa.image} description={manhwa.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Top5Manhwa;