 import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react"; 

const talentDetails = {
  "pattern-recognition": {
    title: "The Art of Pattern Recognition",
    description: "Spotting connections where others see chaos. Drives innovation and insight. Pattern recognition is the foundation of creativity and problem-solving in every field. It allows us to foresee trends, understand complex systems, and develop innovative solutions. Think of it as connecting the dots before anyone else even sees the dots.",
    icon: "👁‍🗨",
  },
  "deep-empathy": {
    title: "The Craft of Deep Empathy",
    description: "Understanding others at a profound level. Builds trust and collaboration. Deep empathy is essential for leadership, teamwork, and meaningful relationships. It enables genuine connection, resolves conflicts, and fosters inclusive environments where everyone feels heard and valued.",
    icon: "❤",
  },
  "community-building": {
    title: "The Skill of Community Building",
    description: "Creating spaces where everyone thrives. Fosters belonging and growth. Community builders unite people and nurture supportive environments. They are the architects of connection, bridging divides and empowering individuals to collectively achieve shared goals.",
    icon: "🤝",
  },
  "storytelling": {
    title: "The Gift of Storytelling",
    description: "Turning experiences into inspiration. Moves hearts and minds. Storytelling is a timeless art that connects generations and cultures. Whether through words, visuals, or actions, master storytellers can captivate, inform, and persuade, leaving a lasting impact.",
    icon: "📚",
  },
  "intuitive-problem-solving": {
    title: "Intuitive Problem Solving",
    description: "Solving complex challenges with creative intuition. This talent brings fresh perspectives and breakthrough solutions by leveraging subconscious insights and a keen sense of what 'feels right' even without explicit data.",
    icon: "💡",
  },
  "active-listening": {
    title: "The Power of Active Listening",
    description: "Truly hearing and understanding others, beyond just their words. Active listeners foster trust and resolve conflicts by making people feel genuinely understood, leading to stronger relationships and more effective communication.",
    icon: "👂",
  },
  "adaptability": {
    title: "Adaptability",
    description: "Thriving in change and uncertainty. Adaptable people lead innovation and resilience by quickly adjusting strategies, embracing new information, and maintaining composure in dynamic environments.",
    icon: "🤸",
  },
  "mentorship": {
    title: "Mentorship",
    description: "Guiding others to reach their potential. Mentors inspire growth and confidence by sharing knowledge, providing constructive feedback, and acting as a sounding board for personal and professional development.",
    icon: "🌟",
  },
  "strategic-thinking": {
    title: "Strategic Thinking",
    description: "Seeing the big picture and planning ahead with foresight. Strategic thinkers drive progress and success by identifying long-term goals, anticipating challenges, and devising effective pathways to achieve desired outcomes.",
    icon: "🎯",
  },
  "creative-collaboration": {
    title: "Creative Collaboration",
    description: "Working together to create something new and innovative. Collaboration multiplies talent and impact by combining diverse perspectives, fostering shared ownership, and unlocking collective genius.",
    icon: "🎨",
  },
  "visual-communication": {
    title: "Visual Communication",
    description: "Conveying ideas and emotions through images, design, and visual storytelling. Visual communicators bridge gaps and inspire action by making complex information accessible and engaging through compelling visuals.",
    icon: "🖼",
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    description: "Recognizing, understanding, and managing emotions in oneself and others for better relationships and decisions. Emotional intelligence is key to leadership, collaboration, and navigating social dynamics effectively.",
    icon: "🧠",
  },
};

export default function TalentDetail() {
  const { talentId } = useParams();
  const detail = talentDetails[talentId];
  const navigate = useNavigate(); // Hook for programmatic navigation

  const [copyStatus, setCopyStatus] = useState("");
  const timerRef = useRef(null); // Ref to hold the timer ID

  // Effect to clear copy status message
  useEffect(() => {
    if (copyStatus) {
      // Clear any existing timer before setting a new one
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => setCopyStatus(""), 2000);
    }
    // Cleanup function to clear timer if component unmounts or copyStatus changes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [copyStatus]);

  // Framer Motion variants for the detail page entry
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
          <h2>Talent Not Found</h2>
          <p>The talent you are looking for does not exist. Please check the URL.</p> {/* More helpful message */}
          <Link to="/#talent-gallery" className="mini-cta">
            ← Back to Gallery
          </Link>
        </div>
      </motion.div>
    );
  }

  const handleBackClick = (e) => {
    e.preventDefault();  
    // Navigate to the home page, then trigger scroll
    navigate("/", { replace: true }); // Use replace to avoid extra history entries

    setTimeout(() => {
      const el = document.getElementById("talent-gallery");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });  
      }
    }, 100);  
  };


  return (
    <motion.div
      className="talent-detail-page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="talent-detail-card">
        <Link to="/" className="back-link" onClick={handleBackClick}>
          ← Back to All Talents
        </Link>

        <h2 className="talent-detail-title">
          {detail.icon && <span className="talent-icon">{detail.icon}</span>}{" "}
          {/* Add icon */}
          {detail.title}
        </h2>
        <p className="talent-detail-description">{detail.description}</p>

        <motion.button  
          className="cta share-button"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopyStatus("Link Copied!");
          }}
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}  
        >
          Share This Talent{" "}
          {copyStatus === "Link Copied!" ? (
            <motion.span
              key="copied-icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              ✅
            </motion.span>
          ) : (
            <motion.span
              key="share-icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              🔗
            </motion.span>
          )}
        </motion.button>
        {copyStatus && <p className="copy-feedback">{copyStatus}</p>}
      </div>
    </motion.div>
  );
}