import { Routes, Route } from 'react-router-dom';

import Login from './components/Login.js'
import ResponsiveAppBar from './components/ResponsiveAppBar.js';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
