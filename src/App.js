// src/App.js
import React from 'react';
import Stats from './pages/Stats';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Players from './pages/Players';
import Champs from './pages/Champs';
import Teams from './pages/Teams';
import Games from './pages/Games';

function App() {
  return (
    <Router>
    <div className="App">
    </div>

      <Routes>
          <Route path="/" element={<Stats />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/champs" element={<Champs />} />
          <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
