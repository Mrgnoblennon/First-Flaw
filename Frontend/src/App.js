import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

import Header from './Components/Layout/Header';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
