import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import Technology from './components/Technology';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <SuccessStories />
        <Technology />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;