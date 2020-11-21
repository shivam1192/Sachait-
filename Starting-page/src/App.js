import React from 'react'
import './App.module.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Developer from './components/Developer';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Content />
      <Product />
      <Developer />
    </div>
  );
}

export default App;
