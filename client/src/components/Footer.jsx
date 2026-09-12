import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-red">RED</span>
              <span className="logo-bull">BULL</span>
            </h3>
            <p className="footer-tagline">Gives You Wiiings</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Products</h4>
              <a href="#products">Energy Drink</a>
              <a href="#products">Sugarfree</a>
              <a href="#products">Editions</a>
              <a href="#products">Organics</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#about">Careers</a>
              <a href="#about">Press</a>
              <a href="#about">Sustainability</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Red Bull. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
