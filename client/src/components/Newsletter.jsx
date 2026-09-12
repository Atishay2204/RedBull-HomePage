import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/https://redbull-homepage-backend.onrender.com/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Could not connect to server. Try again later.');
    }

    setTimeout(() => {
      setStatus(null);
      setMessage('');
    }, 5000);
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-container scroll-reveal">
        <div className="newsletter-glow" aria-hidden="true" />
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Stay in the Loop
        </h2>
        <p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}
        >
          Get the latest news on Red Bull events, products, and exclusive
          content delivered straight to your inbox.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button
              type="submit"
              className="newsletter-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </div>
        </form>

        {status && (
          <div className={`newsletter-message ${status}`}>
            {status === 'success' ? '✓' : '✕'} {message}
          </div>
        )}

        <p className="newsletter-disclaimer">
          By subscribing, you agree to our Privacy Policy. No spam, ever.
        </p>
      </div>
    </section>
  );
}
