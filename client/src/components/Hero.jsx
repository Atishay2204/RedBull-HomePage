import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  /* ── Feature #3: Cursor-Following Spotlight ──────────────────────────────── */
  useEffect(() => {
    const hero = heroRef.current;
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hero.style.setProperty('--spotlight-x', `${x}px`);
      hero.style.setProperty('--spotlight-y', `${y}px`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* ── Feature #4: Parallax on Scroll ──────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach((layer, i) => {
        const speed = (i + 1) * 0.12;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });

      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.35}px)`;
        heroContent.style.opacity = String(1 - scrollY / 700);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* Spotlight overlay */}
      <div className="hero-spotlight" />

      {/* Top glow */}
      <div className="hero-bg-glow" />

      {/* Floating particles */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Parallax mountain silhouettes */}
      <div className="parallax-mountains" aria-hidden="true">
        <div className="parallax-layer mountain-back" />
        <div className="parallax-layer mountain-mid" />
        <div className="parallax-layer mountain-front" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">⚡ ENERGY DRINK #1 WORLDWIDE</div>
        <h1 className="hero-title">
          <span className="title-red">RED BULL</span>
          <span className="title-wings">GIVES YOU WIIINGS</span>
        </h1>
        <p className="hero-subtitle">
          Vitalizes body and mind. Born in the Alps, trusted by athletes,
          creators, and dreamers across the globe.
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn-primary">
            Explore Products
            <span className="btn-arrow">→</span>
          </a>
          <a href="#about" className="btn-secondary">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
