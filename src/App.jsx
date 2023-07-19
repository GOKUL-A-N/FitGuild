import React from 'react';
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import BmiCalculator from "./pages/BmiCalculator"
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Reviews from "./pages/Reviews";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <section  id="home"><Home /></section>
      <section id="bmicalculator"><BmiCalculator  /></section>
      <section id="programs" ><Programs  /></section>
      <section id="trainer" ><Trainers /></section>
      <section id="reviews"><Reviews /></section>
      <section id='footer'><Footer /></section>
    </div>
  )
}

export default App