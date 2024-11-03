import { Routes, Route } from 'react-router-dom';

import Login from './components/Login.js'
import Quests from './components/quests.js'
import Leaderboard from './components/leaderboard.js'
import Profile from './components/Profile.js'
import MongoTest from './components/MongoTest.js'
import ResponsiveAppBar from './components/ResponsiveAppBar.js';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes basename='.'>
        <Route path='/' element={<MongoTest/>}/>
      </Routes>
    </div>
  );
}

export default App;