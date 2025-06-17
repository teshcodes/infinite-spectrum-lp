import { useParams, Link } from "react-router-dom";

const journeyDetails = {
  discover: {
    title: "Discover",
    description: "This is where you can add detailed content about the Discover step."
  },
  cultivate: {
    title: "Cultivate",
    description: "This is where you can add detailed content about the Cultivate step."
  },
  connect: {
    title: "Connect",
    description: "This is where you can add detailed content about the Connect step."
  },
  inspire: {
    title: "Inspire",
    description: "This is where you can add detailed content about the Inspire step."
  }
};

export default function JourneyDetail() {
  const { journeyId } = useParams();
  const detail = journeyDetails[journeyId];

  if (!detail) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Journey Step Not Found</h2>
        <Link to="/#journey">Back to Journey</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "2rem auto" }}>
      <h2>{detail.title}</h2>
      <p>{detail.description}</p>
      <Link to="/#journey" style={{ color: "#6AB187" }}>
        ← Back to Journey
      </Link>
    </div>
  );
}