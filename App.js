import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroesGallery from './HeroesGallery';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import OnboardingPage from './OnboardingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/heroes" element={<HeroesGallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
