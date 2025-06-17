import { useState } from "react";

export default function JourneyProgress() {
  const [step, setStep] = useState(1);
  const steps = [
    "Discover",
    "Cultivate",
    "Connect",
    "Inspire"
  ];

  return (
    <div style={{ margin: "2rem auto", maxWidth: 400 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        {steps.map((label, idx) => (
          <span key={label} style={{ fontWeight: step === idx + 1 ? 700 : 400, color: step === idx + 1 ? "#6AB187" : "#888" }}>
            {label}
          </span>
        ))}
      </div>
      <div style={{ background: "#e0e0e0", borderRadius: 8, height: 8, position: "relative" }}>
        <div
          style={{
            width: `${(step - 1) / (steps.length - 1) * 100}%`,
            background: "linear-gradient(90deg, #6AB187 0%, #5B8DEF 100%)",
            height: "100%",
            borderRadius: 8,
            transition: "width 0.4s"
          }}
        />
      </div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between" }}>
        <button disabled={step === 1} onClick={() => setStep(step - 1)} style={{ border: "none", background: "#f7f7f9", padding: "0.5rem 1rem", borderRadius: 8, cursor: "pointer" }}>Back</button>
        <button disabled={step === steps.length} onClick={() => setStep(step + 1)} style={{ border: "none", background: "#6AB187", color: "#fff", padding: "0.5rem 1rem", borderRadius: 8, cursor: "pointer" }}>Next</button>
      </div>
    </div>
  );
}