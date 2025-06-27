 import React from "react";

export default function Header() {
  return (
    <header style={{
      padding: "1rem 2rem",
      background: "#23272f",
      color: "#fff",
      display: "flex",
      alignItems: "center", // Vertically center items within the header's height
      justifyContent: "flex-start", // Keep items grouped to the left initially
      gap: "20px", // Add space between the logo and the text block
    }}>
      {/* Diamond Logo Container */}
      <div
        style={{
          height: "80px", // Adjust size as needed
          width: "80px",
          position: "relative",
          transform: "rotate(45deg)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src="/logo.jpg"
          alt="Infinite Spectrum Logo"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "rotate(-45deg)",
          }}
        />
      </div>

      {/* Text Content (Name and Slogan) */}
      <div style={{ textAlign: "left" }}> {/* Removed flexGrow: 1 for more control over alignment */}
        <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "0.05em" }}>Infinite Spectrum</h1>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "1.1rem", color: "#b0b0b0" }}>
          Discover and celebrate the quiet vibrancy of human talent.
        </p>
      </div>

      {/* You can add navigation links or other elements here, they will align to the right if you
          change justifyContent back to "space-between" and add a flex-grow:1 to the text div. */}
    </header>
  );
}