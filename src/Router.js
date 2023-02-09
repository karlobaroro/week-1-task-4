import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Navbar from './Navbar';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;