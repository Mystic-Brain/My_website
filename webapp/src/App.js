import Navbar from '../src/components/Navbar/Navbar'
import "./App.css";
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Services from './components/Servicess/Services';
import Works from './components/Works/Works';

function App() {
  
  return (
    <div>
     
   
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      
     
    </div>
  );
}

export default App;
