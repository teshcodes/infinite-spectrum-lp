import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-blobs">
        <svg className="blob blob1" aria-hidden="true" focusable="false" viewBox="0 0 200 200">
          <path fill="#FF6B6B" opacity="0.18" d="M41.6,-67.5C54.7,-59.2,66.8,-54.2,73.1,-44.4C79.4,-34.6,79.9,-20,77.2,-7.2C74.5,5.6,68.6,16.6,62.1,27.1C55.6,37.6,48.5,47.6,39.1,54.8C29.7,62,18,66.4,6.1,68.7C-5.8,71,-17.7,71.2,-28.8,67.2C-39.9,63.2,-50.2,55,-59.2,45.1C-68.2,35.2,-75.9,23.6,-77.6,11.2C-79.3,-1.2,-75,-14.4,-68.1,-25.7C-61.2,-37,-51.7,-46.3,-41.1,-54.7C-30.5,-63.1,-15.2,-70.6,-0.1,-70.5C15,-70.4,30,-62.7,41.6,-67.5Z" transform="translate(100 100)" />
        </svg>
        <svg className="blob blob2" aria-hidden="true" focusable="false" viewBox="0 0 200 200">
          <path fill="#6AB187" opacity="0.14" d="M41.6,-67.5C54.7,-59.2,66.8,-54.2,73.1,-44.4C79.4,-34.6,79.9,-20,77.2,-7.2C74.5,5.6,68.6,16.6,62.1,27.1C55.6,37.6,48.5,47.6,39.1,54.8C29.7,62,18,66.4,6.1,68.7C-5.8,71,-17.7,71.2,-28.8,67.2C-39.9,63.2,-50.2,55,-59.2,45.1C-68.2,35.2,-75.9,23.6,-77.6,11.2C-79.3,-1.2,-75,-14.4,-68.1,-25.7C-61.2,-37,-51.7,-46.3,-41.1,-54.7C-30.5,-63.1,-15.2,-70.6,-0.1,-70.5C15,-70.4,30,-62.7,41.6,-67.5Z" transform="translate(100 100)" />
        </svg>
        <svg className="blob blob3" aria-hidden="true" focusable="false" viewBox="0 0 200 200">
          <path fill="#FFC300" opacity="0.10" d="M41.6,-67.5C54.7,-59.2,66.8,-54.2,73.1,-44.4C79.4,-34.6,79.9,-20,77.2,-7.2C74.5,5.6,68.6,16.6,62.1,27.1C55.6,37.6,48.5,47.6,39.1,54.8C29.7,62,18,66.4,6.1,68.7C-5.8,71,-17.7,71.2,-28.8,67.2C-39.9,63.2,-50.2,55,-59.2,45.1C-68.2,35.2,-75.9,23.6,-77.6,11.2C-79.3,-1.2,-75,-14.4,-68.1,-25.7C-61.2,-37,-51.7,-46.3,-41.1,-54.7C-30.5,-63.1,-15.2,-70.6,-0.1,-70.5C15,-70.4,30,-62.7,41.6,-67.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Beyond the Expected: Discover Your Inner Spectrum.</h1>
        <p>Explore the vast, beautiful world of human ability, redefined.</p>
        <button className="cta">Begin Your Discovery</button>
      </motion.div>
    </section>
  );
}