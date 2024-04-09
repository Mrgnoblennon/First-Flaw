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
import Tshirt from './Components/Pages/Shop/Tshirt';
import Hoodie from './Components/Pages/Shop/Hoodie'
import Socks from './Components/Pages/Shop/Socks';
import Pants from './Components/Pages/Shop/Pants';
import Hat from './Components/Pages/Shop/Hat';
import Product from './Components/Pages/Shop/Product'

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
        <Route path='/tshirt' element={<Wrapper><Tshirt/></Wrapper>} />
        <Route path='/hoodie' element={<Wrapper><Hoodie/></Wrapper>} />
        <Route path='/socks' element={<Wrapper><Socks/></Wrapper>} />
        <Route path='/hat' element={<Wrapper><Hat/></Wrapper>} />
        <Route path='/pants' element={<Wrapper><Pants/></Wrapper>} />
        <Route path="clothing" element={<Wrapper><AllClothing /></Wrapper>} />
        <Route path='/product' element={<Wrapper><Product/></Wrapper>} />
        <Route path="/product/:productId" element={<Wrapper><Product /></Wrapper>} />
        <Route path='/success' element={<Success/>} />
        <Route path="/orderconfirmation" element={<Wrapper><OrderConfirmation /></Wrapper>} />
      </Routes>
    </div>
  );
}

export default App;
