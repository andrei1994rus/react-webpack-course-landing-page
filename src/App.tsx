import Navbar from './components/ts/Navbar';
import Hero from './components/ts/Hero';
import About from './components/ts/About';
import Program from './components/ts/Program';
import HowItWorks from './components/ts/HowItWorks';
import Reviews from './components/ts/Reviews';
import FAQ from './components/ts/FAQ';
import Register from './components/ts/Register';
import Footer from './components/ts/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Program />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Register />
      <Footer />
    </div>
  );
};

export default App;
