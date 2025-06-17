import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Helper component for a custom video player
const VideoPlayer = ({ videoId, title, description, thumbnail }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	// Use hqdefault.jpg for better compatibility
	const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;
	const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

	return (
		<div className="video-player-container">
			{isPlaying ? (
				<iframe
					width="100%"
					height="180"
					src={youtubeEmbedUrl}
					title={title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="video-iframe"
				></iframe>
			) : (
				<div
					className="video-thumbnail-overlay"
					onClick={() => setIsPlaying(true)}
					style={{ backgroundImage: `url(${thumbnail || defaultThumbnail})` }}
				>
					<button className="play-button" aria-label={`Play video: ${title}`}>
						<FaPlay />
					</button>
				</div>
			)}
			<div className="video-details">
				<h4 className="video-title">{title}</h4>
				<p className="video-description">{description}</p>
			</div>
		</div>
	);
};


const testimonials = [
	{
		name: "Jordan",
		quote: "Joining Infinite Spectrum helped me discover strengths I never knew I had. The resources and community support were invaluable.",
		img: "https://randomuser.me/api/portraits/men/32.jpg",
		role: "Community Member",
		rating: 5
	},
	{
		name: "Taylor",
		quote: "Through Infinite Spectrum, I found the clarity and courage to pivot my career and embrace new design challenges. Their mentorship was a game-changer.",
		img: "https://randomuser.me/api/portraits/women/44.jpg",
		role: "UX Designer",
		rating: 5,
		video: "dQw4w9WgXcQ",
		videoTitle: "Designing for Impact: My Journey",
		videoDescription: "Taylor shares how she leverages user experience design to create meaningful digital products and foster inclusive online spaces."
	},
	{
		name: "Morgan",
		quote: "Infinite Spectrum is where I honed my coding skills and connected with fellow developers. It's truly a collaborative environment.",
		img: "https://randomuser.me/api/portraits/men/65.jpg",
		role: "Software Developer",
		rating: 5
	},
	{
		name: "Ava",
		quote: "As an artist, finding a supportive community like this has been transformative. It's a space where creativity is truly celebrated.",
		img: "https://randomuser.me/api/portraits/women/12.jpg",
		role: "Digital Artist",
		rating: 5,
		inspirationImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
	},
	{
		name: "Riley",
		quote: "Mentoring here has been incredibly rewarding. I've seen so many individuals unlock their potential, and it's truly inspiring.",
		img: "https://randomuser.me/api/portraits/men/23.jpg",
		role: "Professional Mentor",
		rating: 5,
		video: "qp0HIF3SfI4",
		videoTitle: "How Great Leaders Inspire Action",
		videoDescription: "Simon Sinek explores the 'why' behind influential leadership and how it inspires action."
	},
	{
		name: "Samira",
		quote: "Infinite Spectrum gave me the platform and courage to finally share my stories. My writing has flourished because of this community.",
		img: "https://randomuser.me/api/portraits/women/55.jpg",
		role: "Content Writer",
		rating: 4
	},
	{
		name: "Eli",
		quote: "The technical insights and collaborative projects here are fantastic. It's like having a powerhouse of engineering minds at your fingertips.",
		img: "https://randomuser.me/api/portraits/men/77.jpg",
		role: "Robotics Engineer",
		rating: 5,
	},
	{
		name: "Lena",
		quote: "As a coach, I appreciate the genuine support system. It reinforces my belief in the power of community for personal growth.",
		img: "https://randomuser.me/api/portraits/women/66.jpg",
		role: "Life Coach",
		rating: 4,
		inspirationImg: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
	},
	{
		name: "Noah",
		quote: "Infinite Spectrum is more than just a community; it's a safe space where I feel seen and encouraged to pursue my passions.",
		img: "https://randomuser.me/api/portraits/men/88.jpg",
		role: "Student",
		rating: 5
	}
];

export default function Testimonials({ id }) {
	const [idx, setIdx] = useState(0);
	const isMobile = window.innerWidth < 768; // Changed breakpoint for common mobile width

	// Determine how many testimonials to show based on screen size
	const itemsToShow = isMobile ? 1 : 3;

	// Create a circular array for testimonials
	const getVisibleTestimonials = () => {
		const visible = [];
		for (let i = 0; i < itemsToShow; i++) {
			visible.push(testimonials[(idx + i) % testimonials.length]);
		}
		return visible;
	};

	function prev() {
		setIdx((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
	}
	function next() {
		setIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
	}

	return (
		<section className="testimonials" id={id}>
			<h2>Echoes of Inspiration</h2>
			<div className="testimonial-controls-wrapper">
				<button
					onClick={prev}
					aria-label="Previous testimonials"
					className="testimonial-nav-button"
				>
					<FaChevronLeft />
				</button>
				<div
					className="testimonial-slider-inner"
					style={{
						maxWidth: isMobile ? "340px" : "1100px",
					}}
				>
					<AnimatePresence initial={false} mode="wait">
						{getVisibleTestimonials().map((t) => (
							<motion.div
								key={t.name} // Using name as key, ensure names are unique
								className="testimonial-card"
								initial={{ opacity: 0, x: isMobile ? 0 : 50, scale: 0.95 }}
								animate={{ opacity: 1, x: 0, scale: 1 }}
								exit={{ opacity: 0, x: isMobile ? 0 : -50, scale: 0.95 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								style={{
									minWidth: isMobile ? "300px" : "320px", // Card width
									maxWidth: "340px", // Max width for individual card
									flexShrink: 0,
								}}
							>
								{t.video ? (
									<VideoPlayer
										videoId={t.video}
										title={t.videoTitle}
										description={t.videoDescription}
									/>
								) : t.inspirationImg ? (
									<img
										src={t.inspirationImg}
										alt="Inspiration"
										className="testimonial-inspiration-img"
									/>
								) : (
									<img
										src={t.img}
										alt={t.name}
										className="testimonial-img"
									/>
								)}
								<blockquote className="testimonial-quote">
									“{t.quote}”
								</blockquote>
								<div className="testimonial-rating">
									{Array.from({ length: 5 }).map((_, i) => (
										<span key={i} className={`star ${i < t.rating ? "filled" : ""}`}>★</span>
									))}
								</div>
								<div className="testimonial-name">{t.name}</div>
								<div className="testimonial-role">{t.role}</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
				<button
					onClick={next}
					aria-label="Next testimonials"
					className="testimonial-nav-button"
				>
					<FaChevronRight />
				</button>
			</div>
			{/* Dots for navigation */}
			<div className="testimonial-dots">
				{testimonials.map((_, i) => (
					<span
						key={i}
						className={`dot ${idx === i ? "active" : ""}`}
						onClick={() => setIdx(i)}
						aria-label={`Go to testimonial ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}