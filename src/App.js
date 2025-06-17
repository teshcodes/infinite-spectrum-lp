import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';

// Import all your components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TalentGallery from "./components/TalentGallery";
import JourneySection from "./components/JourneySection";
import JourneyDetail from "./components/JourneyDetail";
import JourneyProgress from "./components/JourneyProgress";
import ExploreHub from "./components/ExploreHub";
import ProfileDetail from "./components/ProfileDetail";
import ConversionSection from "./components/ConversionSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TalentDetail from "./components/TalentDetail";


import "./App.css";

// --- Dark Mode Context ---
export const ThemeContext = createContext(null);

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="home" // Unique key for this route's motion
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection />
              <TalentGallery id="talent-gallery" />
              <JourneySection id="journey" />
              <JourneyProgress />
              <ExploreHub id="explore-hub" />
              <ConversionSection id="conversion" />
              <Testimonials id="testimonials" />
              <Footer />
            </motion.div>
          }
        />
        <Route
          path="/talent/:talentId"
          element={
            <motion.div
              key="talent-detail" // Unique key for this route's motion
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <TalentDetail />
            </motion.div>
          }
        />
        <Route
          path="/journey/:journeyId"
          element={
            <motion.div
              key="journey-detail" // Unique key for this route's motion
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <JourneyDetail />
            </motion.div>
          }
        />
        <Route
          path="/profile/:profileId"
          element={
            <motion.div
              key="profile-detail" // Unique key for this route's motion
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileDetail />
            </motion.div>
          }
        />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  function ScrollToHash() {
    const location = useLocation();
    useEffect(() => {
      // Small delay for element to render if navigating from another page
      const scrollToElement = () => {
        if (location.hash) {
          let elem = document.getElementById(location.hash.slice(1));
          if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Scroll to top only if the path changes (not just hash changing on same path)
          if (location.pathname !== window.previousPathname) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
        window.previousPathname = location.pathname; // Store current pathname for next comparison
      };

      // Use a timeout to ensure all components are rendered before attempting scroll
      const timer = setTimeout(scrollToElement, 100);
      return () => clearTimeout(timer); // Cleanup timeout
    }, [location]);
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <ScrollToHash /> {/* This handles hash links and scrolls to top on path change */}
        <Header /> {/* Render Header outside Routes to keep it persistent */}
        <AppRoutes />
      </Router>
    </ThemeContext.Provider>
  );
}

// Simple 404 Not Found Component (Can be moved to its own file if preferred)
function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="cta">Go to Home</Link>
    </div>
  );
}

// PropType for the ThemeContext consumer (good practice)
ThemeContext.Consumer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default App;