import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Sejal</Link>
          <p className="footer-tagline">In loving memory of Sejal.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/moments">Moments</Link>
          <Link to="/for-you">For You</Link>
          <Link to="/poems">Poems</Link>
        </nav>
        <p className="footer-copy">&copy; {year} In memory of Sejal. Forever in my heart.</p>
      </div>
    </footer>
  );
}
