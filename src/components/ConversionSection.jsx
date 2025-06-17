import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

// Countdown component (place at the top of this file)
function Countdown() {
  const [seconds, setSeconds] = useState(300); // 5 minutes
  React.useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return <span>{min}:{sec.toString().padStart(2, "0")}</span>;
}

// FAQAccordion component (place at the top of this file)
function FAQAccordion() {
  const faqs = [
    {
      q: "Will I get spammed?",
      a: "Never! We only send you relevant updates and inspiration."
    },
    {
      q: "Is it really free?",
      a: "Yes, joining is 100% free and always will be."
    },
    {
      q: "Can I unsubscribe anytime?",
      a: "Absolutely. Every email has an unsubscribe link."
    }
  ];
  const [open, setOpen] = useState(null);
  return (
    <div style={{ margin: "2rem auto 0 auto", maxWidth: 400 }}>
      <h4 style={{ color: "#6AB187", marginBottom: 8 }}>FAQ</h4>
      {faqs.map((item, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              textAlign: "left",
              background: "#f7f7f9",
              border: "none",
              borderRadius: 6,
              padding: "0.7rem 1rem",
              fontWeight: 600,
              color: "#23272f",
              cursor: "pointer"
            }}
            aria-expanded={open === i}
          >
            {item.q}
            <span style={{ float: "right" }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div style={{ background: "#fff", padding: "0.7rem 1rem", borderRadius: 6, color: "#444" }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// TestimonialSlider component (place at the top of this file)
function TestimonialSlider() {
  const testimonials = [
    {
      name: "Jordan",
      text: "Joining Infinite Spectrum helped me discover strengths I never knew I had.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Taylor",
      text: "The community is so welcoming and inspiring!",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Morgan",
      text: "I love the resources and encouragement I get here.",
      img: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];
  const [idx, setIdx] = useState(0);

  return (
    <div style={{ marginTop: 32, textAlign: "center" }}>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(44,62,80,0.05)",
        padding: "1rem 2rem"
      }}>
        <img src={testimonials[idx].img} alt={testimonials[idx].name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
        <div>
          <div style={{ fontWeight: 600, color: "#6AB187" }}>{testimonials[idx].name}</div>
          <div style={{ fontSize: "1rem", color: "#444", marginTop: 4 }}>{testimonials[idx].text}</div>
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
          style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#6AB187", marginRight: 8 }}
          aria-label="Previous testimonial"
        >‹</button>
        <button
          onClick={() => setIdx((idx + 1) % testimonials.length)}
          style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#6AB187" }}
          aria-label="Next testimonial"
        >›</button>
      </div>
    </div>
  );
}

// Main ConversionSection component (replace the whole file with this)
export default function ConversionSection({ id }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="conversion" id={id}>
      <h2>Ready to Unfold Your Story?</h2>
      {/* Why Join bullet points */}
      <ul style={{
        listStyle: "none",
        padding: 0,
        margin: "1rem 0 0 0",
        color: "#444",
        fontSize: "1rem"
      }}>
        <li>✅ Get exclusive resources</li>
        <li>✅ Be inspired by real stories</li>
        <li>✅ Connect with a supportive community</li>
      </ul>
      {/* Limited-time offer with countdown */}
      <div style={{
        background: "#FF6B6B",
        color: "#fff",
        borderRadius: 8,
        padding: "0.5rem 1rem",
        display: "inline-block",
        margin: "1rem 0",
        fontWeight: 600,
        fontSize: "1rem"
      }}>
        🎁 Join in the next <Countdown /> and get our free guide!
      </div>
      <p>
        Join <strong>2,000+</strong> others discovering their spectrum.<br />
        Get exclusive resources, inspiration, and community invites.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ maxWidth: 400, margin: "2rem auto" }}
      >
        {/* Progress bar */}
        {!submitted && (
          <div style={{ marginBottom: 16 }}>
            <div style={{
              background: "#e0e0e0",
              borderRadius: 8,
              height: 8,
              width: "100%",
              overflow: "hidden"
            }}>
              <div
                style={{
                  width: email ? "100%" : "40%",
                  background: "#6AB187",
                  height: "100%",
                  borderRadius: 8,
                  transition: "width 0.4s"
                }}
              />
            </div>
            <div style={{ fontSize: "0.85rem", color: "#888", marginTop: 4 }}>
              {email ? "Ready to submit!" : "Enter your email to get started"}
            </div>
          </div>
        )}
        {/* Signup form and success message */}
        {!submitted ? (
          <form className="signup-form" onSubmit={handleSubmit} style={{ display: "flex", gap: 0 }}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                padding: "0.7rem 1rem",
                borderRadius: "1rem 0 0 1rem",
                border: "1px solid #ccc",
                flex: 1,
                fontSize: "1rem"
              }}
            />
            <button
              type="submit"
              className="cta"
              style={{
                borderRadius: "0 1rem 1rem 0",
                fontWeight: 700,
                padding: "0.7rem 1.5rem"
              }}
            >
              Start
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ textAlign: "center", color: "#6AB187", fontWeight: 600, fontSize: "1.2rem" }}
          >
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />
            🎉 Thank you!<br />
            Check your inbox for a welcome message.<br />
            {/* Downloadable freebie */}
            <a
              href="/free-guide.pdf"
              download
              style={{
                display: "inline-block",
                marginTop: 16,
                background: "#6AB187",
                color: "#fff",
                padding: "0.7rem 1.5rem",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700
              }}
            >
              Download Your Free Guide
            </a>
          </motion.div>
        )}
      </motion.div>
      {/* Privacy assurance */}
      <div style={{ fontSize: "0.9rem", color: "#888", marginTop: 8 }}>
        We respect your privacy. No spam, ever.
      </div>
      {/* Social proof avatars */}
      <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 8 }}>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" style={{ width: 32, height: 32, borderRadius: "50%" }} />
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" style={{ width: 32, height: 32, borderRadius: "50%" }} />
        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="" style={{ width: 32, height: 32, borderRadius: "50%" }} />
        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" style={{ width: 32, height: 32, borderRadius: "50%" }} />
        <span style={{ color: "#888", fontSize: "0.95rem", alignSelf: "center" }}>and more...</span>
      </div>
      {/* Testimonial slider */}
      <TestimonialSlider />
      {/* FAQ accordion */}
      <FAQAccordion />
    </section>
  );
}