import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
	{
		name: "Jordan",
		quote: "Joining Infinite Spectrum helped me discover strengths I never knew I had.",
		img: "https://randomuser.me/api/portraits/men/32.jpg",
		role: "Community Member",
		rating: 5
	},
	{
		name: "Taylor",
		quote: "The community is so welcoming and inspiring!",
		img: "https://randomuser.me/api/portraits/women/44.jpg",
		role: "Designer",
		rating: 4,
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
	},
	{
		name: "Morgan",
		quote: "I love the resources and encouragement I get here.",
		img: "https://randomuser.me/api/portraits/men/65.jpg",
		role: "Developer",
		rating: 5
	},
	{
		name: "Ava",
		quote: "Infinite Spectrum gave me the confidence to share my story.",
		img: "https://randomuser.me/api/portraits/women/12.jpg",
		role: "Artist",
		rating: 5,
		inspirationImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
	},
	{
		name: "Riley",
		quote: "The encouragement and inspiration here are unmatched.",
		img: "https://randomuser.me/api/portraits/men/23.jpg",
		role: "Mentor",
		rating: 5,
		video: "https://www.youtube.com/embed/ScMzIvxBSi4"
	},
	{
		name: "Samira",
		quote: "I found my tribe and my voice.",
		img: "https://randomuser.me/api/portraits/women/55.jpg",
		role: "Writer",
		rating: 4
	},
	{
		name: "Eli",
		quote: "Every day I learn something new from this community.",
		img: "https://randomuser.me/api/portraits/men/77.jpg",
		role: "Engineer",
		rating: 5,
		video: "https://www.youtube.com/embed/tgbNymZ7vqY"
	},
	{
		name: "Lena",
		quote: "The support here is genuine and heartfelt.",
		img: "https://randomuser.me/api/portraits/women/66.jpg",
		role: "Coach",
		rating: 4,
		inspirationImg: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
	},
	{
		name: "Noah",
		quote: "Infinite Spectrum is a safe space to grow and connect.",
		img: "https://randomuser.me/api/portraits/men/88.jpg",
		role: "Student",
		rating: 5
	}
];

export default function Testimonials({ id }) {
	const [idx, setIdx] = useState(0);
	const isMobile = window.innerWidth < 700;

	// Show 1 at a time on mobile, 3 at a time on desktop
	const visible = isMobile
		? [testimonials[idx]]
		: [
				testimonials[idx],
				testimonials[(idx + 1) % testimonials.length],
				testimonials[(idx + 2) % testimonials.length]
			];

	function prev() {
		setIdx((idx - 1 + testimonials.length) % testimonials.length);
	}
	function next() {
		setIdx((idx + 1) % testimonials.length);
	}

	return (
		<section className="testimonials" id={id}>
			<h2>Echoes of Inspiration</h2>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 24 }}>
				<button
					onClick={prev}
					aria-label="Previous testimonials"
					style={{
						background: "none",
						border: "none",
						fontSize: 28,
						color: "#6AB187",
						cursor: "pointer",
						padding: 8
					}}
				>
					‹
				</button>
				<div
					className="testimonial-slider"
					style={{
						display: "flex",
						gap: 24,
						overflow: "hidden",
						maxWidth: isMobile ? 340 : 1100
					}}
				>
					<AnimatePresence initial={false}>
						{visible.map((t, i) => (
							<motion.div
								key={t.name}
								className="testimonial-card"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -40 }}
								transition={{ duration: 0.4 }}
								style={{
									minWidth: isMobile ? 300 : 320,
									maxWidth: 340,
									background: "#fff",
									borderRadius: 16,
									boxShadow: "0 2px 12px rgba(44,62,80,0.08)",
									padding: "2rem 1.5rem",
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									alignItems: "center"
								}}
							>
								{t.video ? (
									<>
										<div style={{ color: "#6AB187", fontWeight: 600, marginBottom: 4 }}>
											🎥 Video Testimonial
										</div>
										<div style={{ marginBottom: 16, width: "100%", aspectRatio: "16/9" }}>
											<iframe
												width="100%"
												height="180"
												src={t.video}
												title={`Testimonial video by ${t.name}`}
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
												style={{ borderRadius: 12, width: "100%", height: 180 }}
											/>
										</div>
									</>
								) : t.inspirationImg ? (
									<img
										src={t.inspirationImg}
										alt="Inspiration"
										style={{
											width: 64,
											height: 64,
											borderRadius: 12,
											objectFit: "cover",
											marginBottom: 16
										}}
									/>
								) : (
									<img
										src={t.img}
										alt={t.name}
										style={{
											width: 64,
											height: 64,
											borderRadius: "50%",
											objectFit: "cover",
											marginBottom: 16
										}}
									/>
								)}
								<blockquote style={{ fontStyle: "italic", color: "#444", marginBottom: 16 }}>
									“{t.quote}”
								</blockquote>
								{/* Star rating */}
								<div style={{ marginBottom: 8 }}>
									{Array.from({ length: 5 }).map((_, i) => (
										<span key={i} style={{ color: i < t.rating ? "#FFD700" : "#e0e0e0", fontSize: 20 }}>★</span>
									))}
								</div>
								<div style={{ fontWeight: 700, color: "#6AB187" }}>{t.name}</div>
								<div style={{ fontSize: "0.95rem", color: "#888" }}>{t.role}</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
				<button
					onClick={next}
					aria-label="Next testimonials"
					style={{
						background: "none",
						border: "none",
						fontSize: 28,
						color: "#6AB187",
						cursor: "pointer",
						padding: 8
					}}
				>
					›
				</button>
			</div>
			{/* Dots for navigation */}
			<div style={{ textAlign: "center", marginTop: 8 }}>
				{testimonials.map((_, i) => (
					<span
						key={i}
						style={{
							display: "inline-block",
							width: 10,
							height: 10,
							borderRadius: "50%",
							background: idx === i ? "#6AB187" : "#e0e0e0",
							margin: "0 4px",
							cursor: "pointer"
						}}
						onClick={() => setIdx(i)}
						aria-label={`Go to testimonial ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}