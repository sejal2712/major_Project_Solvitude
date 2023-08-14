import './App.css';
import AboutUs from './components/AboutUs';
import BodySec from './components/BodySec';
import Navbar from './components/Navbar';
import Card from './components/basics/Card';
import Contact from './components/Contact';
import ServiceCard from './components/basics/ServiceCard'
function App() {
  return (
    <>
    <Navbar />
    <BodySec />
    <AboutUs />
    <ServiceCard/>
    <Contact />
    </>
  );
}

export default App;
