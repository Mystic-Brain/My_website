
import Navbar from '../src/components/Navbar/Navbar'
import "./App.css";
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Servicess/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Works from './components/Works/Works';
import Footer from './components/Footer/footerr';


import { themeContext } from './Context';
import { useContext } from 'react';



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
