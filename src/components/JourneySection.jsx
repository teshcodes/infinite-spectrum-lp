import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JourneyProgress from "./JourneyProgress";

const pillars = [
	{
		id: "discover",
		title: "Discover",
		desc: "Reflect on your unique strengths and passions. Every journey starts with self-awareness.",
		icon: "🌱",
		color: "#6AB187",
	},
	{
		id: "cultivate",
		title: "Cultivate",
		desc: "Grow your abilities through learning, practice, and curiosity. Progress is a process.",
		icon: "🌿",
		color: "#FF6B6B",
	},
	{
		id: "connect",
		title: "Connect",
		desc: "Share your gifts, collaborate, and make an impact. Together, we amplify our potential.",
		icon: "🌟",
		color: "#B4D455",
	},
	{
		id: "inspire",
		title: "Inspire",
		desc: "Motivate others by sharing your story and achievements. Inspiration is contagious.",
		icon: "✨",
		color: "#5B8DEF",
	},
];

export default function JourneySection({ id }) {
	return (
		<section className="journey" id={id}>
			<h2>Your Journey, Amplified.</h2>
			<div className="pillars">
				{pillars.map((pillar, idx) => (
					<motion.div
						className="pillar-card"
						key={pillar.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.15, duration: 0.6 }}
						viewport={{ once: true }}
						style={{
							borderTop: `5px solid ${pillar.color}`,
							boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
						}}
					>
						<div
							className="pillar-icon"
							style={{
								color: pillar.color,
								fontSize: "2.5rem",
								marginBottom: "1rem",
							}}
						>
							{pillar.icon}
						</div>
						<h3>{pillar.title}</h3>
						<p>{pillar.desc}</p>
						<Link
							to={`/journey/${pillar.id}`}
							className="pillar-cta"
							style={{
								marginTop: "1rem",
								padding: "0.5rem 1.2rem",
								borderRadius: "1rem",
								border: "none",
								background: "#f7f7f9",
								color: pillar.color,
								fontWeight: 600,
								cursor: "pointer",
								boxShadow: "0 2px 8px rgba(44,62,80,0.05)",
								display: "inline-block",
								textDecoration: "none",
							}}
						>
							Learn More
						</Link>
					</motion.div>
				))}
			</div>
			<motion.div
				className="journey-cta"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7, duration: 0.7 }}
				viewport={{ once: true }}
				style={{ marginTop: "3rem" }}
			>
				<a
					href="#explore-hub"
					className="cta"
					style={{
						background:
							"linear-gradient(90deg, #6AB187 0%, #5B8DEF 100%)",
						color: "#fff",
						fontWeight: 700,
						padding: "1rem 2.5rem",
						borderRadius: "2rem",
						textDecoration: "none",
						boxShadow: "0 4px 24px rgba(91,141,239,0.12)",
					}}
				>
					Continue Your Journey →
				</a>
			</motion.div>
			<motion.blockquote
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				style={{
					fontStyle: "italic",
					color: "#5B8DEF",
					margin: "0 auto 2rem auto",
					maxWidth: 500,
					fontSize: "1.2rem",
				}}
			>
				"The journey of a thousand miles begins with a single step." – Lao Tzu
			</motion.blockquote>
			<JourneyProgress />
		</section>
	);
}