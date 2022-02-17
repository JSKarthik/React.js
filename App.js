import React from 'react'
import Navbar from './Navbar';
import MasterComp from './MasterComp';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
function App() {
    return (
       <div>
          <Navbar/>  
          <MasterComp/>
          <About/>
          <Contact/>
          <Footer/>
       </div>
    )
}

export default App;