import './About.css';

const stats = [
  { number: '172+', label: 'Countries' },
  { number: '12B+', label: 'Cans Sold Yearly' },
  { number: '1987', label: 'Founded' },
  { number: '16K+', label: 'Employees' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text scroll-reveal-left">
          <h2 className="section-title">The Red Bull Story</h2>
          <p className="about-description">
            Inspired by functional drinks from the Far East, Dietrich Mateschitz
            founded Red Bull in the mid-1980s. He created the formula of Red Bull
            Energy Drink and developed the unique marketing concept of Red Bull.
            In 1987, on April 1, Red Bull Energy Drink was sold for the very
            first time in its home market Austria.
          </p>
          <p className="about-description">
            Today, Red Bull operates in over 172 countries, giving wings to
            people and ideas. From extreme sports to music and culture, Red Bull
            pushes the boundaries of human potential.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-icon">🏔️</span>
              <span>Born in the Alps</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌍</span>
              <span>Global Presence</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <span>Pushing Limits</span>
            </div>
          </div>
        </div>

        <div className="about-stats scroll-reveal-right">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
