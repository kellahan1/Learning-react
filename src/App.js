import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import ExcerciseDetails from './pages/ExcerciseDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width = "400px" sx={{ width:{ x1: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExcerciseDetails />} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App