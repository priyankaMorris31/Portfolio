import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from './data/ProjectData';
import Projects from './components/Projects';



const App = () => {
    return <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
    </div>;
}



export default App;