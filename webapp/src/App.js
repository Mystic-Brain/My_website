import Navbar from '../src/components/Navbar/Navbar'
import "./App.css";
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Servicess/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Works from './components/Works/Works';

function App() {
  
  return (
    <div>
     
   
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      
      
     
    </div>
  );
}

export default App;
