 import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const journeyDetails = {
  "discover": {
    title: "The Power of Self-Discovery",
    description: "Your journey truly begins when you understand who you are. This involves reflecting on your innate talents, core values, and what genuinely motivates you. Self-discovery isn't a one-time event, but a continuous process of learning about your unique strengths and passions, setting the foundation for all future growth.",
    icon: "🌱",
  },
  "cultivate": {
    title: "Cultivating Your Inner Garden",
    description: "Growth requires nurture. Cultivation means intentionally developing your abilities through consistent learning, dedicated practice, and an insatiable curiosity. It's about transforming raw potential into refined skills, understanding that every effort, no matter how small, contributes to profound progress.",
    icon: "🌿",
  },
  "connect": {
    title: "The Amplification of Connection",
    description: "No journey is walked alone. Connecting involves actively sharing your unique gifts with others, collaborating on shared visions, and building meaningful relationships. It's through these interactions that your individual potential is amplified, creating a ripple effect of positive impact within communities.",
    icon: "🌟",
  },
  "inspire": {
    title: "Igniting the Spark of Inspiration",
    description: "Your amplified journey isn't just for you; it's a beacon for others. Inspiring means motivating those around you by authentically sharing your story, your challenges, and your achievements. It's about demonstrating what's possible, encouraging others to embark on their own journeys of self-amplification.",
    icon: "✨",
  },
};

export default function JourneyDetail() {
  const { journeyId } = useParams();
  const detail = journeyDetails[journeyId];

  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    if (copyStatus) {
      const timer = setTimeout(() => setCopyStatus(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyStatus]);

  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (!detail) {
    return (
      <motion.div
        className="talent-detail-page-container"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="talent-detail-card-error">
          <h2>Journey Step Not Found</h2>
          <p>The journey step you are looking for does not exist.</p>
          <Link to="/#journey" className="mini-cta">
            ← Back to Journey
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="talent-detail-page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="talent-detail-card">
        <Link to="/#journey" className="back-link"
          onClick={(e) => {
            e.preventDefault();
            const url = "/#journey";
            if (window.location.hash === "#journey") {
              const el = document.getElementById("journey");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = url;
            }
          }}
        >
          ← Back to Journey Map
        </Link>

        <h2 className="talent-detail-title">
          {detail.icon && <span className="talent-icon">{detail.icon}</span>}
          {detail.title}
        </h2>
        <p className="talent-detail-description">{detail.description}</p>

        <button
          className="cta share-button"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopyStatus("Link Copied!");
          }}
        >
          Share This Step {copyStatus === "Link Copied!" ? "✅" : "🔗"}
        </button>
        {copyStatus && <p className="copy-feedback">{copyStatus}</p>}
      </div>
    </motion.div>
  );
}

JourneyDetail.propTypes = {
    // No props passed, so no PropTypes needed directly on JourneyDetail
};