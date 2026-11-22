import { ArrowUpRight, Github } from 'lucide-react';

const PROJECT_URL = 'https://github.com/NoaOuahbi/NoaOuahbi.github.io';

export default function ProjectSourceButton() {
  return (
    <a
      className="secondary-button"
      href={PROJECT_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="View the family-managed project source on GitHub"
    >
      <Github size={16} /> View project source <ArrowUpRight size={15} />
    </a>
  );
}
