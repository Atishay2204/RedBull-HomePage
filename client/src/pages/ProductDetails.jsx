import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { useEffect } from 'react';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div 
        className="product-hero-bg" 
        style={{ background: product.gradient }} 
      />
      
      <div className="product-content-container">
        <Link to="/" className="back-link">
          ← Back to Products
        </Link>
        
        <div className="product-grid">
          <div className="product-visual">
            <div className="product-icon-wrapper" style={{ background: product.gradient }}>
              <span className="product-icon-large">{product.icon}</span>
            </div>
          </div>
          
          <div className="product-info">
            <div className="product-badge">RED BULL ENERGY</div>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-tagline">{product.tagline}</p>
            
            <p className="product-description">{product.description}</p>
            
            <div className="product-features">
              <div className="feature-block">
                <h3>Benefits</h3>
                <ul>
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="feature-block">
                <h3>Key Ingredients</h3>
                <ul>
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="btn-primary" style={{ marginTop: '2rem' }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
