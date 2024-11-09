import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar/navbar.jsx';
import Home from './home/home.jsx';
import Shop from './shop/shop.jsx';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Footer from './footer/footer.jsx'; // Import Footer component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer will appear on all pages */}
    </Router>
  </React.StrictMode>
);

reportWebVitals();
