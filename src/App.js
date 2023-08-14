import './App.css';
import AboutUs from './components/AboutUs';
import BodySec from './components/BodySec';
import Navbar from './components/Navbar';
import ServiceCard from './components/basics/ServiceCard'
function App() {
  return (
    <>
    <Navbar />
    <BodySec />
    <AboutUs />
    <ServiceCard/>

    </>
  );
}

export default App;
