import { useState, useEffect } from 'react';
import './Countdown.css';

/* ── Feature #6: Functional Countdown Timer ────────────────────────────────── */

const TARGET_DATE = new Date('2027-01-01T00:00:00');

function calculateTimeLeft() {
  const diff = TARGET_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }) {
  return (
    <div className="time-block">
      <div className="time-value-wrapper">
        <span className="time-value">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="time-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown" id="events">
      <div className="countdown-container scroll-reveal">
        <div className="countdown-glow" aria-hidden="true" />
        <span className="countdown-badge">🏁 UPCOMING EVENT</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Red Bull New Year&apos;s Charge
        </h2>
        <p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto 3rem' }}
        >
          The ultimate energy experience. Ring in 2027 with Red Bull.
        </p>

        <div className="timer">
          <TimeBlock value={timeLeft.days} label="Days" />
          <span className="time-separator">:</span>
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <span className="time-separator">:</span>
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <span className="time-separator">:</span>
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>

        <a
          href="#newsletter"
          className="btn-primary"
          style={{ marginTop: '2.5rem', display: 'inline-flex' }}
        >
          Get Notified <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
