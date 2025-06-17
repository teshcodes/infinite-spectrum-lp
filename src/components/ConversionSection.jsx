import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faTimes, faGift, faCheckCircle, faDownload } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons


// Countdown component
function Countdown() {
  const [seconds, setSeconds] = useState(300); // 5 minutes

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <span>
      {minutes}:{remainingSeconds.toString().padStart(2, "0")}
    </span>
  );
}

// FAQAccordion component (using App.css classes)
function FAQAccordion() {
  const faqs = [
    {
      q: "Will I get spammed?",
      a: "Never! We only send you relevant updates and inspiration. Your inbox is safe with us."
    },
    {
      q: "Is it really free?",
      a: "Yes, joining Infinite Spectrum is 100% free with no hidden costs, now or ever."
    },
    {
      q: "Can I unsubscribe anytime?",
      a: "Absolutely. We believe in your control. Every email you receive from us will have a clear unsubscribe link."
    },
    {
      q: "What kind of resources will I get?",
      a: "You'll receive exclusive guides, worksheets, community event invites, and inspiring stories directly to your inbox."
    }
  ];
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-list"> {/* Use .faq-list class */}
      <h4 style={{ color: "var(--color-secondary)", marginBottom: "1rem" }}>Frequently Asked Questions</h4> {/* Use CSS variable for color */}
      {faqs.map((item, i) => (
        <div key={i} className="faq-item"> {/* Use .faq-item class */}
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="faq-question" // Use .faq-question class
            aria-expanded={open === i}
          >
            {item.q}
            <FontAwesomeIcon icon={open === i ? faTimes : faPlus} className="faq-icon" /> {/* Using FontAwesome for icon */}
          </button>
          <motion.div
            initial={false}
            animate={{ maxHeight: open === i ? "200px" : "0px", opacity: open === i ? 1 : 0 }} // Animate max-height and opacity
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="faq-answer"
          >
            <p>{item.a}</p> {/* Wrap answer in <p> for proper styling */}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// TestimonialSlider component (using App.css classes)
function TestimonialSlider() {
  const testimonials = [
    {
      name: "Jordan P.",
      text: "Joining Infinite Spectrum helped me discover strengths I never knew I had. It's been a game-changer!",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Taylor R.",
      text: "The Infinite Spectrum community is incredibly welcoming, supportive, and truly inspiring!",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Morgan K.",
      text: "I love the exclusive resources and constant encouragement I receive here. Highly recommend!",
      img: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      name: "Alex V.",
      text: "Finally, a place where I feel understood and empowered to explore my potential.",
      img: "https://randomuser.me/api/portraits/women/66.jpg"
    }
  ];
  const [idx, setIdx] = useState(0);

  const nextTestimonial = useCallback(() => {
    setIdx((idx + 1) % testimonials.length);
  }, [idx, testimonials.length]);

  const prevTestimonial = () => {
    setIdx((idx - 1 + testimonials.length) % testimonials.length);
  };

  // Optional: Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [idx, nextTestimonial]); // Reset interval if idx changes manually

  return (
    <div className="testimonial-slider"> {/* Use a new class for the container */}
      <motion.div
        key={idx} // Key changes to re-trigger animation on index change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="testimonial-content" // Use a new class for the testimonial content box
      >
        <img src={testimonials[idx].img} alt={testimonials[idx].name} className="testimonial-img" /> {/* Use .testimonial-img */}
        <blockquote>"{testimonials[idx].text}"</blockquote> {/* Use blockquote for semantic meaning */}
        <div className="testimonial-name">{testimonials[idx].name}</div> {/* Use .testimonial-name */}
      </motion.div>
      <div className="testimonial-controls"> {/* Use a new class for controls */}
        <button
          onClick={prevTestimonial}
          className="testimonial-nav-button" // Use a new class for nav buttons
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={nextTestimonial}
          className="testimonial-nav-button" // Use a new class for nav buttons
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

// --- Main ConversionSection Component ---
export default function ConversionSection({ id }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
  }

  return (
    <section className="conversion" id={id}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Ready to Unfold Your Story?
      </motion.h2>

      <motion.ul
        className="why-join-list" // New class for why join list
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <li><FontAwesomeIcon icon={faCheckCircle} /> Unlock exclusive resources & tools</li>
        <li><FontAwesomeIcon icon={faCheckCircle} /> Be inspired by real stories of discovery</li>
        <li><FontAwesomeIcon icon={faCheckCircle} /> Connect with a vibrant, supportive community</li>
      </motion.ul>

      <motion.div
        className="limited-offer-banner" // New class for the banner
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <FontAwesomeIcon icon={faGift} /> Join in the next <Countdown /> and get our *free premium guide*!
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Join *<span className="highlight-text">2,000+</span>* others discovering their spectrum.<br />
        Get exclusive resources, inspiration, and community invites delivered directly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="conversion-form-container" // New container for form and progress
      >
        {/* Progress bar */}
        {!submitted && (
          <div className="signup-progress-bar"> {/* New class */}
            <div className="signup-progress-fill" style={{ width: email ? "100%" : "40%" }} />
            <div className="signup-progress-label">
              {email ? "You're all set! Just hit 'Start'" : "Enter your email to get started..."}
            </div>
          </div>
        )}

        {/* Signup form and success message */}
        {!submitted ? (
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your best email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="signup-input" // New class
              aria-label="Enter your email address"
            />
            <button
              type="submit"
              className="cta signup-button" // Use cta class and a new specific class
            >
              Start Your Journey
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="signup-success-message" // New class
          >
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />
            <span className="success-icon">🎉</span> Thank you for joining!<br />
            Check your inbox for a welcome message & your guide.
            <motion.a
              href="https://your-link-to-guide.com/your-guide.pdf" // <-- put your actual link here
              target="_blank"
              rel="noopener noreferrer"
              className="cta download-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faDownload} /> Download Your Free Guide
            </motion.a>
          </motion.div>
        )}
      </motion.div>

      {/* Privacy assurance */}
      <motion.div
        className="privacy-assurance" // New class
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        We respect your privacy. No spam, ever.
      </motion.div>

      {/* Social proof avatars */}
      <motion.div
        className="avatar-stack" // New class for the avatar stack
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" className="profile-img" /> {/* Use profile-img */}
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Avatar" className="profile-img" />
        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User Avatar" className="profile-img" />
        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="User Avatar" className="profile-img" />
        <span className="avatar-stack-text">and <strong>2,000+</strong> others already inside...</span>
      </motion.div>

      {/* Testimonial slider */}
      <TestimonialSlider />

      {/* FAQ accordion */}
      <FAQAccordion />
    </section>
  );
}