import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaMentions from './components/MediaMentions';
import Products from './components/Products';
import TrustedSection from './components/TrustedSection';
import WhyFree from './components/WhyFree';
import HowItWorks from './components/HowItWorks';
import Legacy from './components/Legacy';
import Stats from './components/Stats';
import Faq from './components/Faq';
import CTA from './components/CTA';
import Footer2 from './components/Footer2';
import ProgressBar from './components/ProgressBar';
import GetStarted from './components/GetStarted';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MediaMentions />
                <Products />
                <TrustedSection />
                <WhyFree />
                <HowItWorks />
                <Legacy />
                <Stats />
                <Faq />
                <CTA />
                <Footer2 />
              </>
            }
          />
          <Route
            path="/get-started"
            element={
              <>
                <ProgressBar />
                <GetStarted />
                <Footer2 />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
