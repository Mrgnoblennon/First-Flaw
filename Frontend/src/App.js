import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Payment from './Components/Pages/Legal/Payment';
import Shipping from './Components/Pages/Legal/Shipping';
import Returns from './Components/Pages/Legal/Returns';
import Contact from './Components/Pages/Contact';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/returns" element={<Returns/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
