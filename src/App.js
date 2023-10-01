import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import BodySec from './components/BodySec';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ServiceCard from './components/basics/ServiceCard';
import CardSinglePage from './components/basics/CardSinglePage';

function App() {
  return (

    <Router>
      <Navbar />
      <BodySec />
      <AboutUs />
      <Routes>


        <Route path="/" element={<ServiceCard />} />


        <Route path="/card/:id" element={<CardSinglePage />} />

      </Routes>
      <Contact />



    </Router>
  );
}

export default App;
