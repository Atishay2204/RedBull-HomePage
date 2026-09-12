import { useRef } from 'react';
import './Products.css';

const products = [
  { name: 'Original',    tagline: 'The Classic Energy',       gradient: 'linear-gradient(135deg, #1a3a6c, #2a5298)', icon: '⚡' },
  { name: 'Sugarfree',   tagline: 'Zero Sugar, Full Energy',  gradient: 'linear-gradient(135deg, #2a4a7c, #4a8bc2)', icon: '💎' },
  { name: 'Tropical',    tagline: 'Tropical Burst',           gradient: 'linear-gradient(135deg, #c8a800, #f0d000)', icon: '🌴' },
  { name: 'Watermelon',  tagline: 'Summer Edition',           gradient: 'linear-gradient(135deg, #c23060, #e05080)', icon: '🍉' },
  { name: 'Peach',       tagline: 'Peach Nectarine Bliss',    gradient: 'linear-gradient(135deg, #d08030, #f0a050)', icon: '🍑' },
  { name: 'Blueberry',   tagline: 'Blue Edition',             gradient: 'linear-gradient(135deg, #4030a0, #6050d0)', icon: '🫐' },
];

/* ── Feature #5: 3D Tilt Hover Card ────────────────────────────────────────── */
function ProductCard({ product, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform =
      'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      className="product-card scroll-reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="card-glow" />
      <div className="card-visual" style={{ background: product.gradient }}>
        <span className="card-icon">{product.icon}</span>
      </div>
      <div className="card-info">
        <h3 className="card-name">Red Bull {product.name}</h3>
        <p className="card-tagline">{product.tagline}</p>
        <button className="card-btn">Learn More</button>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <div className="scroll-reveal">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Choose your wings. Each can is crafted to fuel your passion and
            push your limits.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
