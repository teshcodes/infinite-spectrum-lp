import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "What is Infinite Spectrum?",
    answer: "Infinite Spectrum is a platform dedicated to helping individuals discover, cultivate, and connect through their unique, often overlooked, skills and talents. It's a vibrant community for personal and professional growth, empowering you to unlock your full potential."
  },
  {
    question: "How do I discover my 'inner spectrum'?",
    answer: "Our platform offers various intuitive tools, guided exercises, and interactive community interactions specifically designed to help you reflect on your diverse experiences, identify latent strengths, and truly understand how they contribute to your unique abilities and perspective."
  },
  {
    question: "Can I connect with other members?",
    answer: "Absolutely! Infinite Spectrum is built on the power of community. You can easily connect with like-minded individuals through personalized profiles, engaging interest groups, and exciting collaborative projects, fostering invaluable mentorship and shared learning experiences within our supportive network."
  },
  {
    question: "Is there a cost to join?",
    answer: "We offer both robust free and comprehensive premium membership options. The free tier provides essential access to our core features and community, while our premium tiers unlock advanced tools, exclusive in-depth content, and personalized guidance to accelerate your journey."
  },
  {
    question: "How can I contribute my skills?",
    answer: "We actively encourage and empower members to share their unique expertise and talents. You can contribute by leading insightful discussions, offering valuable mentorship to others, creating impactful content, or actively participating in our dynamic collaborative community projects."
  },
  {
    question: "What kind of support can I expect?",
    answer: "Beyond our tools and community, you'll find a dedicated support team ready to assist you. We offer resources, tips, and direct help to ensure your experience on Infinite Spectrum is smooth and rewarding."
  }
];

export default function FAQSection({ id }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current = faqData.map((_, i) => contentRefs.current[i] || React.createRef());
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id={id}>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index}>
              {item.question}
              <FontAwesomeIcon icon={openIndex === index ? faTimes : faPlus} className="faq-icon" />
            </button>
            <motion.div
              ref={contentRefs.current[index]}
              initial={false}
              animate={{
                maxHeight: openIndex === index && contentRefs.current[index].current
                  ? contentRefs.current[index].current.scrollHeight
                  : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="faq-answer"
            >
              <p>{item.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}