import { Routes, Route } from 'react-router-dom';

import Login from './components/Login.js'
import Quests from './components/quests.js'
import Leaderboard from './components/leaderboard.js'
import ResponsiveAppBar from './components/ResponsiveAppBar.js';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes basename='.'>
        <Route path='/' element={<Login/>}/>
        <Route path='/quests' element={<Quests/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
