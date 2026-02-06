import './Moments.css';

const moments = [
  {
    id: 1,
    title: 'Time together',
    label: 'A memory to hold',
    description: 'The moments we shared. Add your own memories here.',
    emoji: '🌸',
  },
  {
    id: 2,
    title: 'Adventures',
    label: 'Places we shared',
    description: 'Places we went together. Replace with your favourite memory.',
    emoji: '💕',
  },
  {
    id: 3,
    title: 'Celebrations',
    label: 'Birthdays & milestones',
    description: 'Every celebration with her was sweeter. Add your milestones here.',
    emoji: '🎂',
  },
  {
    id: 4,
    title: 'Everyday moments',
    label: 'Small things',
    description: 'The ordinary moments that became special because we shared them.',
    emoji: '☕',
  },
];

export default function Moments() {
  return (
    <div className="page moments-page">
      <section className="moments-hero">
        <div className="container">
          <h1 className="section-title">Moments</h1>
          <p className="section-subtitle">
            Highlights and milestones we shared — customise these with your own memories of her.
          </p>
        </div>
      </section>

      <section className="moments-list">
        <div className="container">
          <div className="moments-grid">
            {moments.map((moment) => (
              <article key={moment.id} className="moment-card">
                <div className="moment-card-icon" aria-hidden="true">
                  {moment.emoji}
                </div>
                <span className="moment-card-label">{moment.label}</span>
                <h2 className="moment-card-title">{moment.title}</h2>
                <p className="moment-card-desc">{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
