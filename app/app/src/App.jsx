import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dash from './Components/Dash';
import MarqueeDemo from './Components/ui/MarqueeDemo';
import Sliders from './Components/Sliders';
import Game from './Components/Game';
import Number from './Components/Number';
import Why from './Components/Why';
import Diff from './Components/Diff';
import Slide from './Components/Slide';
import Globe from './Components/Globe';
import Comm from './Components/Comm';
import Video from './Components/Video';
import Contact from './Components/Contact';

// Routed Pages
import About from './Components/Pages/About';
import Adv from './Components/Adv';
import Media from './Components/Media';
import Blog from './Components/Pages/Blog';
import Courses from './Components/Pages/Courses';
import Privacy from './Components/Pages/Privacy';
import Pricing from './Components/Pages/Pricing';
import Terms from './Components/Pages/Terms';
import Split from './Components/Split';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Base animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <Router>
      <div>
        {/* Navbar */}
      

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className='bg-black' >
              <div>   
              <Navbar /> 
              </div>
                <div>
                  <Dash />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <MarqueeDemo />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <Adv />
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <Sliders />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <Game />
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Number />
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <Why />
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <Diff />
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <Slide />
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                  <Globe />
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                  <Media />
                </div>
                <div data-aos="fade-up" data-aos-delay="1100">
                  <Comm />
                </div>
                <div data-aos="fade-up" data-aos-delay="1200">
                  <Video />
                </div>
                <div data-aos="fade-up" data-aos-delay="1300"> 
                  <Split />
                </div>
                <div data-aos="fade-up" data-aos-delay="1400">
                  <Contact />
                </div>
                <Footer />
               
              </div>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />
          <Route path='/blog' element ={ <Blog /> } />
          <Route path='/courses' element = { <Courses />} />
          <Route path='/pricing' element = { <Pricing /> } />
          <Route path='/privacy' element = { <Privacy /> } />
          <Route path='/terms' element = { <Terms /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
