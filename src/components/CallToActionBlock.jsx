export default function CallToActionBlock({ id }) {
  return (
    <section className="cta-block" id={id}>
      <div className="cta-block-content">
        <h2>Ready to Deepen Your Understanding?</h2>
        <p>
          Dive into our comprehensive resources, join specialized workshops, and connect with a network of experts. Your next breakthrough is just a click away.
        </p>
        <button className="cta">Explore Resources</button>
      </div>
    </section>
  );
}