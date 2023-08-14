import './App.css';
import AboutUs from './components/AboutUs';
import BodySec from './components/BodySec';
import Navbar from './components/Navbar';
import Card from './components/basics/Card';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Navbar />
    <BodySec />
    <AboutUs />
     <Card/>
    <Contact />
    </>
  );
}

export default App;
