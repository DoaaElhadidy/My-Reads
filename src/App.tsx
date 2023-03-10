import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default App;
