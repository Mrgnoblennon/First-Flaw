import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Payment from './Components/Pages/Legal/Payment';
import Shipping from './Components/Pages/Legal/Shipping';
import Returns from './Components/Pages/Legal/Returns';
import Contact from './Components/Pages/Contact';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import PaymentPage from './Components/Pages/Payment/PaymentPage'
import './App.css';
import './fonts/RedHatDisplay-VariableFont_wght.ttf';

import Tshirt from './Components/Pages/Shop/Tshirt';
import Hoodie from './Components/Pages/Shop/Hoodie'
import Ring from './Components/Pages/Shop/Ring';
import Pants from './Components/Pages/Shop/Pants';
import Product from './Components/Pages/Shop/Product'


function App() {
  return (
    <div className="font">
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/paymentpage" element={<PaymentPage />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
              <Route path='/tshirt' element={<Tshirt/>} />
              <Route path='/hoodie' element={<Hoodie/>} />
              <Route path='/ring' element={<Ring/>} />
              <Route path='/pants' element={<Pants/>} />
              <Route path='/product' element={<Product/>} />
              <Route path="/product/:productId" element={<Product />} />
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
