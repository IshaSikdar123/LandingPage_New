// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Components
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Dash from './Components/Dash';
// import MarqueeDemo from './Components/ui/MarqueeDemo';
// import Sliders from './Components/Sliders';
// import Game from './Components/Game';
// import Number from './Components/Number';
// import Why from './Components/Why';
// import Diff from './Components/Diff';
// import Slide from './Components/Slide';
// import Globe from './Components/Globe';
// import Comm from './Components/Comm';
// import Video from './Components/Video';
// import Split from './Components/Split';
// import Contact from './Components/Contact';

// // Routed Pages
// import About from './Components/Pages/About';
// import Adv from './Components/Adv';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Navbar */}
        

//         {/* Routes */}
//         <Routes>
//           {/* Static Components */}
//           <Route
//             path="/"
//             element={
//               <>
//                <Navbar />
//                 <Dash />
//                 <MarqueeDemo />
//                 <Adv />
//                 <Sliders />
//                 <Game />
//                 <Number />
//                <Why />
//                  <Diff />
//                 <Slide />
//                <Globe />
//                 <Comm />
//                 <Video />
//                {/* <Split /> */}
//                  <Contact />
//                 <Footer /> 
//               </>
//             }
//           />

//           {/* About Page */}
//           <Route path="/about" element={<About />} />
//         </Routes>

//         {/* Footer */}
       
//       </div>
//     </Router>
//   );
// }

// export default App;










import React from 'react'
import Adv from './Components/Adv'

function App() {
  return (
    <div>
      <Adv />
    </div>
  )
}

export default App
