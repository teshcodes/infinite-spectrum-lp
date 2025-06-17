import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const talents = [
    {
        id: "pattern-recognition",
        title: "The Art of Pattern Recognition",
        desc: "Spotting connections where others see chaos. Drives innovation and insight.",
    },
    {
        id: "deep-empathy",
        title: "The Craft of Deep Empathy",
        desc: "Understanding others at a profound level. Builds trust and collaboration.",
    },
    {
        id: "community-building",
        title: "The Skill of Community Building",
        desc: "Creating spaces where everyone thrives. Fosters belonging and growth.",
    },
    {
        id: "storytelling",
        title: "The Gift of Storytelling",
        desc: "Turning experiences into inspiration. Moves hearts and minds.",
    },
    {
        id: "intuitive-problem-solving",
        title: "Intuitive Problem Solving",
        desc: "Solving complex challenges with creative intuition. Brings fresh perspectives.",
    },
    {
        id: "active-listening",
        title: "The Power of Active Listening",
        desc: "Truly hearing and understanding others. Fosters trust and resolves conflicts.",
    },
    {
        id: "adaptability",
        title: "Adaptability",
        desc: "Thriving in change and uncertainty. Leads innovation and resilience.",
    },
    {
        id: "mentorship",
        title: "Mentorship",
        desc: "Guiding others to reach their potential. Inspires growth and confidence.",
    },
    {
        id: "strategic-thinking",
        title: "Strategic Thinking",
        desc: "Seeing the big picture and planning ahead. Drives progress and success.",
    },
    {
        id: "creative-collaboration",
        title: "Creative Collaboration",
        desc: "Working together to create something new. Multiplies talent and impact.",
    },
    {
        id: "visual-communication",
        title: "Visual Communication",
        desc: "Conveying ideas and emotions through images, design, and visual storytelling.",
    },
    {
        id: "emotional-intelligence",
        title: "Emotional Intelligence",
        desc: "Recognizing, understanding, and managing emotions for better relationships and decisions.",
    },
];

export default function TalentGallery({ id }) {
  return (
    <section className="talent-gallery" id={id}>
      <h2>Talent Redefined: The Skills You Never Knew Were Art.</h2>
      <div className="gallery-grid">
        {talents.map((talent) => (
          <div className="talent-card" key={talent.id}>
            <h3>{talent.title}</h3>
            <p>{talent.desc}</p>
            <Link
              to={`/talent/${talent.id}`}
              className="mini-cta"
              style={{ display: "inline-block", marginTop: "1rem" }}
            >
              Explore {talent.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

TalentGallery.propTypes = {
  id: PropTypes.string
};