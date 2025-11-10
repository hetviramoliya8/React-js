import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import DesktopPage from './Component/DesktopPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/desk' element={<DesktopPage />} />
      </Routes>
    </BrowserRouter>
  );
}
