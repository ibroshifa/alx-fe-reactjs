import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';   

import Services from './components/Services';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' ,margin:'auto'}}>
      <Routes>
        <Route   
 path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact   
 />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default   
 App;