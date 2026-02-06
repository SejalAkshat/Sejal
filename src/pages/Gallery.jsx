import { useState } from 'react';
import './Gallery.css';

const photos = [
  { id: 1, title: 'Sejal', caption: 'In memory', src: '/photos/photo-1.jpg' },
  { id: 2, title: 'Sejal', caption: 'In memory', src: '/photos/photo-2.png' },
  { id: 3, title: 'Sejal', caption: 'In memory', src: '/photos/photo-3.png' },
  { id: 4, title: 'Sejal', caption: 'In memory', src: '/photos/photo-4.png' },
  { id: 5, title: 'Sejal', caption: 'In memory', src: '/photos/photo-5.png' },
  { id: 6, title: 'Sejal', caption: 'In memory', src: '/photos/photo-6.png' },
  { id: 7, title: 'Sejal', caption: 'In memory', src: '/photos/photo-7.png' },
  { id: 8, title: 'Sejal', caption: 'In memory', src: '/photos/photo-8.png' },
  { id: 9, title: 'Sejal', caption: 'In memory', src: '/photos/photo-9.png' },
  { id: 10, title: 'Sejal', caption: 'In memory', src: '/photos/photo-10.png' },
  { id: 11, title: 'Sejal', caption: 'In memory', src: '/photos/photo-11.png' },
  { id: 12, title: 'Sejal', caption: 'In memory', src: '/photos/photo-12.png' },
  { id: 13, title: 'Sejal', caption: 'In memory', src: '/photos/photo-13.png' },
  { id: 14, title: 'Sejal', caption: 'In memory', src: '/photos/photo-14.png' },
  { id: 15, title: 'Sejal', caption: 'In memory', src: '/photos/photo-15.png' },
  { id: 16, title: 'Sejal', caption: 'In memory', src: '/photos/photo-16.png' },
  { id: 17, title: 'Sejal', caption: 'In memory', src: '/photos/photo-17.png' },
  { id: 18, title: 'Sejal', caption: 'In memory', src: '/photos/photo-18.png' },
  { id: 19, title: 'Sejal', caption: 'In memory', src: '/photos/photo-19.png' },
  { id: 20, title: 'Sejal', caption: 'In memory', src: '/photos/photo-20.png' },
  { id: 21, title: 'Sejal', caption: 'In memory', src: '/photos/photo-21.png' },
  { id: 22, title: 'Sejal', caption: 'In memory', src: '/photos/photo-22.png' },
  { id: 23, title: 'Sejal', caption: 'In memory', src: '/photos/photo-23.png' },
  { id: 24, title: 'Sejal', caption: 'In memory', src: '/photos/photo-24.png' },
  { id: 25, title: 'Sejal', caption: 'In memory', src: '/photos/photo-25.png' },
  { id: 26, title: 'Sejal', caption: 'In memory', src: '/photos/photo-26.png' },
  { id: 27, title: 'Sejal', caption: 'In memory', src: '/photos/photo-27.png' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="page gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className="section-subtitle">
            A collection of moments in her memory.
          </p>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="gallery-item-caption">{item.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={closeLightbox}
          >
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightboxIndex].src} alt={photos[lightboxIndex].title} />
          </div>
        </div>
      )}
    </div>
  );
}
