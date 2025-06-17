import { useParams, Link } from "react-router-dom";

const talentDetails = {
  "pattern-recognition": {
    title: "The Art of Pattern Recognition",
    description: "Spotting connections where others see chaos. Drives innovation and insight. Pattern recognition is the foundation of creativity and problem-solving in every field.",
  },
  "deep-empathy": {
    title: "The Craft of Deep Empathy",
    description: "Understanding others at a profound level. Builds trust and collaboration. Deep empathy is essential for leadership, teamwork, and meaningful relationships.",
  },
  "community-building": {
    title: "The Skill of Community Building",
    description: "Creating spaces where everyone thrives. Fosters belonging and growth. Community builders unite people and nurture supportive environments.",
  },
  "storytelling": {
    title: "The Gift of Storytelling",
    description: "Turning experiences into inspiration. Moves hearts and minds. Storytelling is a timeless art that connects generations and cultures.",
  },
  "intuitive-problem-solving": {
    title: "Intuitive Problem Solving",
    description: "Solving complex challenges with creative intuition. This talent brings fresh perspectives and breakthrough solutions.",
  },
  "active-listening": {
    title: "The Power of Active Listening",
    description: "Truly hearing and understanding others. Active listeners foster trust and resolve conflicts.",
  },
  "adaptability": {
    title: "Adaptability",
    description: "Thriving in change and uncertainty. Adaptable people lead innovation and resilience.",
  },
  "mentorship": {
    title: "Mentorship",
    description: "Guiding others to reach their potential. Mentors inspire growth and confidence.",
  },
  "strategic-thinking": {
    title: "Strategic Thinking",
    description: "Seeing the big picture and planning ahead. Strategic thinkers drive progress and success.",
  },
  "creative-collaboration": {
    title: "Creative Collaboration",
    description: "Working together to create something new. Collaboration multiplies talent and impact.",
  },
  "visual-communication": {
    title: "Visual Communication",
    description: "Conveying ideas and emotions through images, design, and visual storytelling. Visual communicators bridge gaps and inspire action.",
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    description: "Recognizing, understanding, and managing emotions for better relationships and decisions. Emotional intelligence is key to leadership and collaboration.",
  },
};

export default function TalentDetail() {
  const { talentId } = useParams();
  const detail = talentDetails[talentId];

  if (!detail) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Talent Not Found</h2>
        <Link to="/#talent-gallery">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "2rem auto" }}>
      <h2>{detail.title}</h2>
      <p>{detail.description}</p>
      <Link
        to="/"
        style={{ color: "#6AB187", display: "inline-block", marginTop: "1rem" }}
        onClick={() => {
          setTimeout(() => {
            const el = document.getElementById("talent-gallery");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      >
        ← Back to Gallery
      </Link>
      <button
        style={{
          margin: "2rem 0 1rem 0",
          padding: "0.7rem 1.5rem",
          borderRadius: "1rem",
          border: "none",
          background: "#FF6B6B",
          color: "#fff",
          cursor: "pointer"
        }}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("Talent link copied! Share it with your friends.");
        }}
      >
        Share This Talent
      </button>
    </div>
  );
}