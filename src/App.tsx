import { lazy } from 'react';
import Navbar from './components/ts/Navbar';
import Hero from './components/ts/Hero';
import About from './components/ts/About';
import HowItWorks from './components/ts/HowItWorks';
import FAQ from './components/ts/FAQ';
import Footer from './components/ts/Footer';

import withSuspense from './hoc/withSuspense';

import './App.css';

const Reviews = lazy(() => import('./components/ts/Reviews'));
const Program = lazy(() => import('./components/ts/Program'));
const Register = lazy(() => import('./components/ts/Register'));

const WithSuspenseReviews = withSuspense(Reviews);
const WithSuspenseProgram = withSuspense(Program);
const WithSuspenseRegister = withSuspense(Register);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WithSuspenseProgram />
      <HowItWorks />
      <WithSuspenseReviews />
      <FAQ />
      <WithSuspenseRegister />
      <Footer />
    </div>
  );
};

export default App;
