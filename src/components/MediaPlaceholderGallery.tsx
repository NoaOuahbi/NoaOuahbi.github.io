import './MediaPlaceholderGallery.css';
import { Image as ImageIcon, Layers, Video } from 'lucide-react';

const placeholders = [
  {
    label: 'IMAGE',
    title: 'Image placeholder',
    description: 'A reserved space for family-approved artwork or a future illustration.',
    className: 'image',
    icon: ImageIcon,
  },
  {
    label: 'VIDEO',
    title: 'Video placeholder',
    description: 'A place for a future family-approved story or project video.',
    className: 'video',
    icon: Video,
  },
  {
    label: 'MEDIA',
    title: 'Media placeholder',
    description: 'A flexible space for artwork or other family-approved media.',
    className: 'media',
    icon: Layers,
  },
];

export default function MediaPlaceholderGallery() {
  return (
    <ul className="media-placeholder-grid" aria-label="Image, video, and media placeholders">
      {placeholders.map(({ label, title, description, className, icon: Icon }) => (
        <li key={className}>
          <article className="media-placeholder-card">
            <div className={`media-placeholder-art media-placeholder-art-${className}`} role="img" aria-label={`${label.toLowerCase()} placeholder`}>
              <Icon size={40} strokeWidth={1.5} aria-hidden="true" />
              <span className="media-placeholder-stamp">ADD {label}</span>
            </div>
            <div className="media-placeholder-copy">
              <span className="eyebrow">{label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
