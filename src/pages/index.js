import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrinksMenu from './DrinksMenu';
import MenuDetails from './MenuDetails';

const Menu = () => {
  return (
  <>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DrinksMenu />} />
          <Route path="/menu/:id" element={<MenuDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  </>
  )
}

export default Menu;