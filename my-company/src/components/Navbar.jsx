import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      
        display: 'flex',
        justifyContent: 'space-between', 
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#f0f0f0',
        
  margin: 0,
  padding: 0,
      }}>
      <ul style={{ display: 'flex', listStyle: 'none' ,width: '100%' }}>
        <li style={{margin:'10px',}}><Link to="/">Home</Link></li>
        <li style={{margin:'10px'}}><Link to="/about">About</Link></li>
        <li style={{margin:'10px'}}><Link to="/services">Services</Link></li>
        <li style={{margin:'10px'}}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 