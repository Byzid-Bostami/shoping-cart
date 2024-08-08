import React from 'react'
import Shop from './Pages/Shop';
import Cart from './Pages/cart';
import Navbar from './Components/Navbar';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}  />
          <Route path="/Cart" element={<Cart />}  />
        </Routes>
    </div>
  )
}

export default App