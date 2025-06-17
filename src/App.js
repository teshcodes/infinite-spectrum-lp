import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import TalentGallery from "./components/TalentGallery";
import JourneySection from "./components/JourneySection";
import ExploreHub from "./components/ExploreHub";
import ConversionSection from "./components/ConversionSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TalentDetail from "./components/TalentDetail";
import JourneyDetail from "./components/JourneyDetail";
import ProfileDetail from "./components/ProfileDetail";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HeroSection />
                <TalentGallery id="talent-gallery" />
                <JourneySection id="journey-section" /> {/* Add this ID */}
                <ExploreHub id="explore-hub" />       {/* Add this ID */}
                <ConversionSection id="conversion-section" /> {/* Add this ID */}
                <Testimonials id="testimonials-section" /> {/* Add this ID */}
                <Footer />
              </motion.div>
            }
          />
          <Route
            path="/talent/:talentId"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <TalentDetail />
              </motion.div>
            }
          />
          <Route path="/journey/:journeyId" element={<JourneyDetail />} />
          <Route path="/profile/:profileId" element={<ProfileDetail />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;