import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [jokes, setJokes] = useState([]); 

  useEffect(() => {
   
    axios
      .get('/jokes')
      .then((response) => {
        setJokes(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error); 
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>😂 The Funniest Joke Collection 😂</h1>
        <p>Get ready to laugh out loud with these hilarious jokes!</p>
      </header>
      <ul className="jokes-list">
        {jokes.map((joke) => (
          <li key={joke.id} className="joke-item">
            {joke.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
