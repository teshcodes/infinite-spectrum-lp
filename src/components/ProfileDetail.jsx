import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { tabs } from "./ExploreHub"; // Export tabs from ExploreHub.jsx

export default function ProfileDetail() {
  const { profileId } = useParams();

  // Find the profile in all tabs
  const profile = useMemo(() => {
    for (const tab of tabs) {
      const found = tab.profiles.find(p => p.id === profileId);
      if (found) return found;
    }
    return null;
  }, [profileId]);

  if (!profile) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Profile Not Found</h2>
        <Link to="/#explore-hub">Back to Explore Hub</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <img
        src={profile.img}
        alt={profile.name}
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: 16
        }}
      />
      <h2>{profile.name}</h2>
      <div style={{ color: "#6AB187", fontWeight: 600, marginBottom: 8 }}>{profile.title}</div>
      <p style={{ fontSize: "1.1rem" }}>{profile.desc}</p>
      <div style={{ margin: "2rem 0" }}>
        {/* Add more detailed info here if you want */}
        <p>This is where you can add a full bio, portfolio, or links for {profile.name}.</p>
      </div>
      <Link to="/#explore-hub" style={{ color: "#6AB187" }}>
        ← Back to Explore Hub
      </Link>
    </div>
  );
}