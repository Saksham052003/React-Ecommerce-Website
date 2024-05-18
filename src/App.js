import React, { useEffect, useState } from 'react';
import data from './main_pages/Data/data.json'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './main_pages/Home';
import Product from './main_pages/product';
import ProductDetail from './main_pages/product_detail';
import Cart from './main_pages/cart';
import Payment from'./main_pages/payment';
import SuccessfullPay from'./main_pages/successfullPay';
import Search from './main_pages/seach';
import CategoryProducts from'./main_pages/CategoryProducts';
import TransactionHistory from './main_pages/TransectionHistory';
import Contact from'./main_pages/contact';
import About from './main_pages/about';
import FAQ from'./main_pages/FAQ';

function App() {
  const [jsonData, setJsonData] = useState(null);
  
  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home data={data}/>} />
          <Route path="/product" element={<Product data={data} />} />
          <Route path="/product_detail/:id" element={<ProductDetail data={data} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />}/>
          <Route path="/successfullPay" element={<SuccessfullPay />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/category/:category" element={<CategoryProducts />}/>
          <Route path="/transectionHistory" element={<TransactionHistory />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/faq" element={<FAQ />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
