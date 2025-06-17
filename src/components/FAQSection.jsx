import React, { useState } from 'react';
const faqData = [
  {
    question: "What is Infinite Spectrum?",
    answer: "Infinite Spectrum is a platform dedicated to helping individuals discover, cultivate, and connect through their unique, often overlooked, skills and talents. It's a community for personal and professional growth."
  },
  {
    question: "How do I discover my 'inner spectrum'?",
    answer: "Our platform offers various tools, guided exercises, and community interactions designed to help you reflect on your experiences, identify latent strengths, and understand how they contribute to your unique abilities."
  },
  {
    question: "Can I connect with other members?",
    answer: "Absolutely! Infinite Spectrum is built on community. You can connect with others through profiles, interest groups, and collaborative projects, fostering mentorship and shared learning experiences."
  },
  {
    question: "Is there a cost to join?",
    answer: "We offer both free and premium membership options. The free tier provides access to core features, while premium tiers unlock advanced tools, exclusive content, and personalized guidance."
  },
  {
    question: "How can I contribute my skills?",
    answer: "We encourage members to share their expertise. You can contribute by leading discussions, offering mentorship, creating content, or participating in collaborative community projects."
  }
];

export default function FAQSection({ id }) {
  const [openIndex, setOpenIndex] = useState(null);

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
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
