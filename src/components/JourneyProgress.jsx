import { useState } from "react";
import { motion } from "framer-motion";

export default function JourneyProgress() {
  const [step, setStep] = useState(1);
  const steps = [
    "Discover",
    "Cultivate",
    "Connect",
    "Inspire"
  ];

  return (
    <motion.div
      className="journey-progress-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="journey-progress-labels">
        {steps.map((label, idx) => (
          <span
            key={label}
            className={`journey-progress-label ${step === idx + 1 ? "active" : ""}`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="journey-progress-bar-background">
        <motion.div
          className="journey-progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${(step - 1) / (steps.length - 1) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="journey-progress-controls">
        <button
          className="journey-progress-button"
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        <button
          className="journey-progress-button primary"
          disabled={step === steps.length}
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}