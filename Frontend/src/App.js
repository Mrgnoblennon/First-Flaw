import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
