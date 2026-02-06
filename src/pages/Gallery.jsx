import { useState } from 'react';
import './Gallery.css';

const base = import.meta.env.BASE_URL;

const photoList = [
  { id: 1, ext: 'jpg' },
  ...Array.from({ length: 26 }, (_, i) => ({ id: i + 2, ext: 'png' })),
];

const photos = photoList.map(({ id, ext }) => ({
  id,
  title: 'Sejal',
  caption: 'In memory',
  src: `${base}photos/photo-${id}.${ext}`,
}));

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
