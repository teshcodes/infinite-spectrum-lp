 import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import the tabs data from ExploreHub to access profile details
import { tabs } from "./ExploreHub";

// Flatten all profiles into a single object for easy lookup
const allProfiles = tabs.reduce((acc, tab) => {
    tab.profiles.forEach(profile => {
        acc[profile.id] = profile;
    });
    return acc;
}, {});

export default function ProfileDetail() {
  const { profileId } = useParams();
  const detail = allProfiles[profileId]; // Lookup profile by ID

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
          <h2>Profile Not Found</h2>
          <p>The profile you are looking for does not exist.</p>
          <Link to="/#explore-hub" className="mini-cta"> {/* Link back to explore hub section */}
            ← Back to Explore Hub
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="talent-detail-page-container" // Reusing container class
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="talent-detail-card profile-detail-card"> {/* Added profile-detail-card for specific styles */}
        <Link to="/#explore-hub" className="back-link"
          onClick={(e) => {
            e.preventDefault();
            const url = "/#explore-hub";
            if (window.location.hash === "#explore-hub") {
              const el = document.getElementById("explore-hub");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = url;
            }
          }}
        >
          ← Back to All Profiles
        </Link>

        <div className="profile-detail-header">
            <img
                src={detail.img}
                alt={detail.name}
                className="profile-detail-img"
            />
            <div className="profile-detail-info">
                <h2 className="talent-detail-title">{detail.name}</h2>
                <div className="profile-detail-title">{detail.title}</div>
            </div>
        </div>
        <p className="talent-detail-description">{detail.desc}</p>

        <button
          className="cta share-button"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopyStatus("Link Copied!");
          }}
        >
          Share This Profile {copyStatus === "Link Copied!" ? "✅" : "🔗"}
        </button>
        {copyStatus && <p className="copy-feedback">{copyStatus}</p>}
      </div>
    </motion.div>
  );
}

ProfileDetail.propTypes = {
    // No props passed, so no PropTypes needed directly on ProfileDetail
};