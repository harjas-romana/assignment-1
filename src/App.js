// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [manhwas, setManhwas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/manhwas')
      .then(response => response.json())
      .then(data => setManhwas(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Manhwa List</h1>
      <ul>
        {manhwas.map(manhwa => (
          <li key={manhwa.id}>
            <h2>{manhwa.title}</h2>
            <p>{manhwa.description}</p>
            <img src={manhwa.image} alt={manhwa.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
