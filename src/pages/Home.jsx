import { Link } from 'react-router-dom';
import InstallApp from '../components/InstallApp';
import './Home.css';

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content container">
          <p className="hero-label">In loving memory</p>
          <h1 className="hero-title">Sejal</h1>
          <p className="hero-subtitle">Every moment with you was a photograph worth keeping.</p>
          <div className="hero-actions">
            <Link to="/gallery" className="btn btn-primary">View Gallery</Link>
            <Link to="/our-story" className="btn btn-secondary">Her Story</Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span className="scroll-dot" />
        </div>
      </section>

      <section className="home-intro">
        <div className="container">
          <h2 className="section-title">In Her Memory</h2>
          <p className="section-subtitle">
            A corner of the internet dedicated to Sejal — her smile, our memories, and the time we shared.
          </p>
          <div className="intro-cards">
            <Link to="/gallery" className="intro-card">
              <span className="intro-card-icon" aria-hidden="true">📷</span>
              <h3>Gallery</h3>
              <p>Photos that keep her close.</p>
            </Link>
            <Link to="/moments" className="intro-card">
              <span className="intro-card-icon" aria-hidden="true">✨</span>
              <h3>Moments</h3>
              <p>Memories we hold dear.</p>
            </Link>
            <Link to="/for-you" className="intro-card">
              <span className="intro-card-icon" aria-hidden="true">💌</span>
              <h3>For You</h3>
              <p>A letter in her memory.</p>
            </Link>
          </div>
          <InstallApp />
        </div>
      </section>
    </div>
  );
}
