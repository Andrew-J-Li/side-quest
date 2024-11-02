import { Routes, Route } from 'react-router-dom';

import Login from './components/Login.js'
import Quests from './components/quests.js'
import ResponsiveAppBar from './components/ResponsiveAppBar.js';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/quests' element={<Quests/>}/>
      </Routes>
    </div>
  );
}

export default App;
