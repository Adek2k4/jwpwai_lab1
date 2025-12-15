export default function PageSection({ children }) {
  return (
    <section className="page-wrapper">
      <div className="page-card">{children}</div>
    </section>
  );
}
