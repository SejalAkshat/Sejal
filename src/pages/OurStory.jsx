import './OurStory.css';

const storySteps = [
  {
    year: 'The beginning',
    title: 'When we met',
    text: 'Every love story is beautiful, but ours is my favourite. This is where our story started — you can edit this and add your own moments.',
  },
  {
    year: 'First moments',
    title: 'Getting to know you',
    text: 'The little things that made me fall for you. Inside jokes, small moments, and the way you smiled.',
  },
  {
    year: 'In memory',
    title: 'The time we had',
    text: 'I hold every moment we shared close. This is for you, Sejal — you are missed, every day.',
  },
];

export default function OurStory() {
  return (
    <div className="page our-story-page">
      <section className="story-hero">
        <div className="container">
          <h1 className="section-title">Her Story</h1>
          <p className="section-subtitle">
            A few chapters of the time we shared — you can replace this text with your own memories.
          </p>
        </div>
      </section>

      <section className="story-timeline">
        <div className="container container-narrow">
          {storySteps.map((step, index) => (
            <article key={index} className="story-step">
              <div className="story-step-marker" aria-hidden="true">
                <span className="story-step-dot" />
              </div>
              <div className="story-step-content">
                <span className="story-step-year">{step.year}</span>
                <h2 className="story-step-title">{step.title}</h2>
                <p className="story-step-text">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-quote">
        <div className="container">
          <blockquote className="quote-block">
            <p>"Mein hamesha tumko he chahunga ,Tum thi , Tum ho or hamesha tum he rahogi mere dil me ,no one can take your place, I love you Seju ALWAYS !!"</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
