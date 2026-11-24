import MediaPlaceholderGallery from './MediaPlaceholderGallery';

export default function TimelineVideo() {
  return (
    <section className="content-section timeline-video-section" aria-labelledby="timeline-video-heading">
      <div className="section-heading">
        <span className="eyebrow">MEDIA PLACEHOLDERS</span>
        <h2 id="timeline-video-heading">There is no rush to grow into a story.</h2>
        <p className="timeline-family-note">This family-managed space has room for approved media when the time is right. No dates, locations, or private routines are included.</p>
      </div>
      <MediaPlaceholderGallery />
    </section>
  );
}
