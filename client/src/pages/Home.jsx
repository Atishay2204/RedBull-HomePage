import { useEffect } from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Countdown from '../components/Countdown';
import About from '../components/About';
import Newsletter from '../components/Newsletter';

export default function Home() {
  useEffect(() => {
    // Re-initialize intersection observer when Home mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealTargets = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
    );
    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Products />
      <div className="section-divider" />
      <Countdown />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Newsletter />
    </>
  );
}
