import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/hero/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>  
      <Router>
         <Header/>
         <Routes>
           <Route path="/" element={<Home />} />    
           <Route path="/about" element={<About />} />  
           <Route path="/courses" element={<CourseHome />} /> 
           <Route path="/team" element={<Team />} /> 
           <Route path="/pricing" element={<Price />} /> 
           <Route path="/journal" element={<Blog />} /> 
           <Route path="/contact" element={<Contact />} /> 
         </Routes>  
         <Footer /> 
      </Router>
    </>
  )
}

export default App
