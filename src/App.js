import { Routes, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Quests from './components/quests.js';
import Leaderboard from './components/leaderboard.js';
import Profile from './components/Profile.js';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import Preview from './components/Preview.js';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes basename='.'>
        <Route path='/' element={<Preview />} />
        <Route path='/quests' element={<Quests />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
