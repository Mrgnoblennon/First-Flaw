import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';

import Header from './Components/Layout/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
