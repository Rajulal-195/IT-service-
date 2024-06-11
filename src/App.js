import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import About from './Component/About';
import Services from './Component/Services';
import Location from './Component/Location';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}

export default App;
