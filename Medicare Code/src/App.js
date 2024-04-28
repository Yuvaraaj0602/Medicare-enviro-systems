import React from 'react';
import './App.css';
import Processes from './Processes/processes'
import Gallery from './Gallery/Gallery'
import Legal from "./Legal/Legal"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} name="homePage"/>
      <Route path="/process" element={<Processes />} name="Process"/>
      <Route path="/gallery" element={<Gallery />} name="Gallery"/>
      <Route path="/legal" element={<Legal />} name="Legal"/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
