import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Payment from './Components/Pages/Legal/Payment';
import Shipping from './Components/Pages/Legal/Shipping';
import Returns from './Components/Pages/Legal/Returns';
import Contact from './Components/Pages/Contact';
import Wrapper from './Components/Helpers/Wrapper';
import PaymentPage from './Components/Pages/Payment/PaymentPage'
import Success from './Components/Pages/Payment/Success'

import OrderConfirmation from './Components/Pages/Payment/Helpers/OrderConfirmation';


import './App.css';
import './fonts/RedHatDisplay-VariableFont_wght.ttf';

import AllClothing from './Components/Pages/Shop/AllClothing';
import Product from './Components/Pages/Shop/Product'
import ProductType from './Components/Pages/Shop/ProductType';

function App() {
  return (
    <div className="font">
      <Routes>
        <Route path="/" element={<Wrapper><Home /></Wrapper>} />
        <Route path="/about" element={<Wrapper><About /></Wrapper>} />
        <Route path="/contact" element={<Wrapper><Contact /></Wrapper>} />
        <Route path="/payment" element={<Wrapper><Payment /></Wrapper>} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/shipping" element={<Wrapper><Shipping /></Wrapper>} />
        <Route path="/returns" element={<Wrapper><Returns /></Wrapper>} />
        <Route path="clothing" element={<Wrapper><AllClothing /></Wrapper>} />
        <Route path="/product/:productId" element={<Wrapper><Product /></Wrapper>} />
        <Route path="/products/:productType" element={<Wrapper><ProductType /></Wrapper>} />
        <Route path='/success' element={<Success/>} />
        <Route path="/orderconfirmation" element={<Wrapper><OrderConfirmation /></Wrapper>} />
      </Routes>
    </div>
  );
}

export default App;
