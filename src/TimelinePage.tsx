import TimelineVideo from './components/TimelineVideo';

const storySections = [
  { title: 'Little discoveries', icon: '✧', text: 'New sounds, colors, and stories are little invitations to explore.' },
  { title: 'Playful days', icon: '☼', text: 'Make-believe and creative play leave room for every kind of wonder.' },
  { title: 'Time together', icon: '♡', text: 'The best memories grow from kindness, care, and being together.' },
];

export default function TimelinePage() {
  return (
    <main id="main" className="page-main timeline-page" tabIndex={-1}>
      <section className="timeline-hero">
        <span className="eyebrow">A GROWING STORY</span>
        <h1>Little <span className="gradient-text">moments</span></h1>
        <p>A gentle collection of themes for family memories. Add only guardian-approved stories and media; keep private details offline.</p>
      </section>

      <TimelineVideo />

      <section className="content-section timeline-screenshots" aria-labelledby="timeline-screenshots-heading">
        <div className="section-heading">
          <span className="eyebrow">A FAMILY MEMORY BOOK</span>
          <h2 id="timeline-screenshots-heading">A story with room to grow.</h2>
          <p>These are reminders of what this space celebrates—not a record of dates, locations, or private routines.</p>
        </div>
        <ol className="timeline-list">
          {storySections.map((item, index) => (
            <li className="timeline-item" key={item.title}>
              <div className="timeline-date"><strong>{String(index + 1).padStart(2, '0')}</strong><span>{item.title}</span></div>
              <figure className="timeline-figure">
                <div className="timeline-memory-illustration" aria-hidden="true">{item.icon}</div>
                <figcaption>{item.text}</figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
