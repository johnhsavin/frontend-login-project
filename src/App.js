import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h2>Wrong Path</h2>} />

 </Routes>
<Footer />
</BrowserRouter>
   
  );
}

export default App;
