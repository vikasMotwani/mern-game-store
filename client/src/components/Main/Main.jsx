import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Store from './Store'
import Details from './Details'
import Order from './Order'

const Main = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <main className="min-h-screen">
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </main>;
};

export default Main;
