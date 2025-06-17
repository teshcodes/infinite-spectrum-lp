import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import JourneyProgress from "./JourneyProgress";

const pillars = [
	{
		id: "discover",
		title: "Discover",
		desc: "Reflect on your unique strengths and passions. Every journey starts with self-awareness.",
		icon: "🌱",
		color: "#6AB187", // Secondary green
	},
	{
		id: "cultivate",
		title: "Cultivate",
		desc: "Grow your abilities through learning, practice, and curiosity. Progress is a process.",
		icon: "🌿",
		color: "#FF6B6B", // Primary red
	},
	{
		id: "connect",
		title: "Connect",
		desc: "Share your gifts, collaborate, and make an impact. Together, we amplify our potential.",
		icon: "🌟",
		color: "#5B8DEF", // A vibrant blue
	},
	{
		id: "inspire",
		title: "Inspire",
		desc: "Motivate others by sharing your story and achievements. Inspiration is contagious.",
		icon: "✨",
		color: "#B4D455", // A bright yellow-green
	},
];

export default function JourneySection({ id }) {
	// Framer Motion variants for pillars
	const pillarCardVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<section className="journey" id={id}>
			<h2>Your Journey, Amplified.</h2>
			<motion.div
				className="pillars"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				{pillars.map((pillar, idx) => (
					<motion.div
						className="pillar-card journey-pillar-card"
						key={pillar.id}
						variants={pillarCardVariants}
						transition={{ delay: idx * 0.15 }}
						whileHover={{ scale: 1.03, boxShadow: "var(--shadow-md)" }}
						whileTap={{ scale: 0.98 }}
						style={{
							borderTop: `5px solid ${pillar.color}`,
						}}
					>
						<div
							className="pillar-icon journey-pillar-icon"
							style={{ color: pillar.color }}
						>
							{pillar.icon}
						</div>
						<h3>{pillar.title}</h3>
						<p>{pillar.desc}</p>
						<Link
							to={`/journey/${pillar.id}`}
							className="mini-cta journey-pillar-cta"
						>
							Learn More <span className="mini-cta-arrow">&rarr;</span>
						</Link>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className="journey-cta"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7, duration: 0.7 }}
				viewport={{ once: true }}
			>
				<a href="#explore-hub" className="cta journey-main-cta">
					Continue Your Journey <span className="cta-icon">&rarr;</span>
				</a>
			</motion.div>

			<motion.blockquote
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="journey-quote"
			>
				"The journey of a thousand miles begins with a single step." – Lao Tzu
			</motion.blockquote>

			<JourneyProgress />
		</section>
	);
}

JourneySection.propTypes = {
	id: PropTypes.string,
};