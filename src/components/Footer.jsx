export default function Footer() {
  return (
    <footer className="footer" style={{
      background: "#23272f",
      color: "#f7f7f9",
      padding: "2.5rem 1rem 1rem 1rem",
      textAlign: "center",
      marginTop: "4rem"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16
      }}>
        <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
          Infinite Spectrum
        </div>
        <nav style={{ margin: "0.5rem 0" }}>
          <a href="#talent-gallery" style={footerLinkStyle}>Talents</a>
          <a href="#journey" style={footerLinkStyle}>Journey</a>
          <a href="#explore-hub" style={footerLinkStyle}>Find Your Path</a>
          <a href="#conversion" style={footerLinkStyle}>Join</a>
        </nav>
        <div style={{ margin: "0.5rem 0", display: "flex", gap: 16, justifyContent: "center" }}>
          <a
            href="teslimakano20@gmail.com"
            style={footerLinkStyle}
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            📧
          </a>
          <a
            href="https://facebook.com/teshcodes"
            style={footerLinkStyle}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <span aria-hidden="true">📘</span>
          </a>
          <a
            href="https://instagram.com/tesh_devs"
            style={footerLinkStyle}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <span aria-hidden="true">📸</span>
          </a>
          <a
            href="https://tiktok.com/teshcodes"
            style={footerLinkStyle}
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <span aria-hidden="true">🎵</span>
          </a>
        </div>
      </div>
      <div style={{
        marginTop: 24,
        fontSize: "0.95rem",
        color: "#b0b0b0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }}>
        <span>
          &copy; {new Date().getFullYear()} Infinite Spectrum. All rights reserved.
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Built with <span aria-label="love" style={{ color: "#FF6B6B" }}>❤️</span> by
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <img
              src="/my-avatar.jpg"
              alt="Akano Teslim Ayomide"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #6AB187"
              }}
            />
            <span style={{ fontWeight: 600, color: "#f7f7f9" }}>Akano Teslim Ayomide</span>
          </span>
        </span>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: "#b0b0b0",
  margin: "0 0.7rem",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1rem",
  transition: "color 0.2s"
};