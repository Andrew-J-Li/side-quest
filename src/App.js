import React from 'react';
import './App.css';
import Quests from './components/quests'; // Import Home component

function App() {
  return (
    <div className="App">
      {/* Render the Home component */}
      <Quests />
    </div>
  );
}

export default App;
