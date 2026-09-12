clearimport { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Countdown from './components/Countdown';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  /* ── Scroll-reveal observer (Feature #2: Scroll Animations) ────────────── */
  useEffect(() => {
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
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <Products />
        <div className="section-divider" />
        <Countdown />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
