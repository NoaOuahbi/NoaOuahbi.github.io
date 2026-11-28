import React, { lazy, Suspense, useEffect, useState } from 'react';
import { NOA_STORAGE_KEYS, readNoaCookie, setNoaCookie, writeSessionPreference } from './clientStorage';
import {
  ArrowUpRight,
  AudioLines,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Github,
  House,
  Info,
  ListMusic,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  ShieldCheck,
  Sun,
  UserPlus,
  X,
} from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import ContributionWeekEmbed from './components/ContributionWeekEmbed';
import PwaInstallButton from './components/PwaInstallButton';
import LanguageShowcase from './components/LanguageShowcase';
import ProjectSourceButton from './components/ProjectSourceButton';
import TimelinePage from './TimelinePage';
import ProtectedUsersPage from './protectedUSERS_root_path_secure/ProtectedUsersPage';

const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

const PROJECT_URL = 'https://github.com/NoaOuahbi/NoaOuahbi.github.io';
const PROTECTED_USERS_URL = '/protectedUSERS_root_path_secure/';
const SOURCE_URL = PROJECT_URL;

function EcoHeader({
  leftOpen,
  rightOpen,
  onToggleLeft,
  onToggleRight,
}: {
  leftOpen: boolean;
  rightOpen: boolean;
  onToggleLeft: () => void;
  onToggleRight: () => void;
}) {
  return (
    <header className="eco-header">
      <div className="header-side">
        <button className="icon-button toggle-button" type="button" onClick={onToggleLeft} aria-label="Toggle navigation" aria-expanded={leftOpen} title="Toggle navigation (Ctrl+B)">
          {leftOpen ? <PanelLeftClose size={19} /> : <PanelLeftOpen size={19} />}
        </button>
        <a className="brand" href="/" aria-label="Noa's Little World home"><span className="brand-mark">ECO</span><span className="brand-label">LITTLE WORLD</span></a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about.html">Our story</a>
          <a href="/timeline.html">Little moments</a>
          <a href="/#languages">Explore</a>
          <a href="/#listen">Listen</a>
        </nav>
      </div>
      <div className="header-side header-side-right">
        <a className="header-link github-link" href={PROJECT_URL} target="_blank" rel="noreferrer" aria-label="View the family-managed project source"><Github size={16} /><span>Project source</span></a>
        <a className="icon-button toggle-button" href={SOURCE_URL} target="_blank" rel="noreferrer" aria-label="Open the Noa project repository" title="Project source"><ArrowUpRight size={18} /></a>
        <a className="icon-button toggle-button" href={PROTECTED_USERS_URL} aria-label="Open the family-only area" title="Family-only area"><UserPlus size={19} /></a>
        <button className="icon-button toggle-button right-toggle" type="button" onClick={onToggleRight} aria-label="Toggle right sidebar" aria-expanded={rightOpen} title="Toggle right sidebar (Ctrl+M)">
          {rightOpen ? <PanelRightClose size={19} /> : <PanelRightOpen size={19} />}
        </button>
      </div>
    </header>
  );
}

function EcoLeftSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <button className="sidebar-backdrop left-backdrop" type="button" aria-label="Close navigation" onClick={onClose} />}
      <aside className={`left-sidebar ${open ? 'sidebar-open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-content">
          <div className="sidebar-section-label">Little world</div>
          <nav className="sidebar-nav" aria-label="Noa's pages">
            <a href="/" className="sidebar-link"><House size={18} /><span>Home</span><ChevronRight size={15} /></a>
            <a href="/about.html" className="sidebar-link"><Info size={18} /><span>Our story</span></a>
            <a href="/timeline.html" className="sidebar-link"><Clock3 size={18} /><span>Little moments</span></a>
            <a href="/#languages" className="sidebar-link"><Code2 size={18} /><span>Play &amp; explore</span></a>
            <a href="/#listen" className="sidebar-link"><ListMusic size={18} /><span>Music corner</span></a>
            <div className="sidebar-divider" />
            <a href={SOURCE_URL} className="sidebar-link" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /><span>Project source</span></a>
            <a href={PROJECT_URL} className="sidebar-link" target="_blank" rel="noreferrer"><Github size={18} /><span>Family-managed repository</span></a>
            <a href={PROTECTED_USERS_URL} className="sidebar-link"><UserPlus size={18} /><span>Family-only area</span></a>
          </nav>
          <p className="sidebar-footnote">A family-managed space, shared with care.</p>
        </div>
        <button type="button" className="sidebar-close icon-button" aria-label="Close navigation" onClick={onClose}><X size={18} /></button>
      </aside>
    </>
  );
}

function EcoRightSidebar({
  open,
  onClose,
  theme,
  onToggleTheme,
}: {
  open: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}) {
  return (
    <>
      {open && <button className="sidebar-backdrop right-backdrop" type="button" aria-label="Close settings" onClick={onClose} />}
      <aside className={`right-sidebar ${open ? 'sidebar-open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-content settings-content">
          <div className="settings-title-row"><div><span className="sidebar-section-label">PREFERENCES</span><h2>Settings</h2></div><button type="button" className="icon-button" aria-label="Close settings" onClick={onClose}><X size={18} /></button></div>
          <section className="settings-section">
            <h3>Appearance</h3>
            <button type="button" className="setting-action" onClick={onToggleTheme}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              <span>{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            </button>
          </section>
          <section className="settings-section">
            <h3>Install this app</h3>
            <PwaInstallButton />
          </section>
          <section className="settings-section">
            <h3>Your music</h3>
            <a className="setting-action" href="/#listen"><AudioLines size={17} /><span>Open your music library</span><ChevronRight size={15} /></a>
            <p className="settings-note">Private tracks and saved links stay in this browser on this device. They are never uploaded by this site.</p>
          </section>
          <section className="settings-section">
            <h3>Project information</h3>
            <a className="setting-action" href="https://github.com/NoaOuahbi/NoaOuahbi.github.io/blob/main/SECURITY.md" target="_blank" rel="noreferrer"><ShieldCheck size={17} /><span>Privacy &amp; security</span><ArrowUpRight size={14} /></a>
            <a className="setting-action" href="https://github.com/NoaOuahbi/NoaOuahbi.github.io/blob/main/TERMS.md" target="_blank" rel="noreferrer"><CircleHelp size={17} /><span>Site notes</span><ArrowUpRight size={14} /></a>
          </section>
          <a href={SOURCE_URL} target="_blank" rel="noreferrer" className="settings-version">Noa's Little World · source <ArrowUpRight size={13} /></a>
        </div>
      </aside>
    </>
  );
}

function HomePage() {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  useEffect(() => {
    if (!isAvatarOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsAvatarOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAvatarOpen]);

  return (
    <main id="main" className="page-main" tabIndex={-1}>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">A FAMILY-MANAGED LITTLE WORLD</p>
          <div className="hero-heading-row">
            <h1>Hi, I’m <span>Noa.</span><br /><span className="gradient-text">I make room for wonder.</span></h1>
            <button
              className="hero-avatar-button"
              type="button"
              onClick={() => setIsAvatarOpen(true)}
              aria-label="Enlarge the illustrated baby avatar"
            >
              <img className="hero-avatar" src="/assets/noa-baby-avatar.svg" alt="Illustrated baby avatar placeholder" />
            </button>
          </div>
          <p className="hero-subtitle">A gentle family space celebrating everyday moments, playful discoveries, stories, music, and the people who make Noa feel loved.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/about.html">About this little world <ArrowUpRight size={16} /></a>
            <div className="follow-action">
              <ProjectSourceButton />
              <p className="follow-click-note">Family-managed project source; this link opens the public repository.</p>
            </div>
            <a className="secondary-button" href="#listen"><AudioLines size={16} /> Listen with me</a>
          </div>
          <p className="hero-caption">Family-managed · child privacy first · shared with care</p>
        </div>
      </section>
      <ContributionWeekEmbed
        site="noaouahbi"
        repository="NoaOuahbi/NoaOuahbi.github.io"
        branch="main"
      />
      {isAvatarOpen && (
        <div
          className="avatar-lightbox"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsAvatarOpen(false);
          }}
        >
          <div className="avatar-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Illustrated baby avatar">
            <button
              className="avatar-lightbox-close"
              type="button"
              onClick={() => setIsAvatarOpen(false)}
              aria-label="Close enlarged avatar"
              autoFocus
            >
              <X size={24} />
            </button>
            <img src="/assets/noa-baby-avatar.svg" alt="Illustrated baby avatar placeholder" />
          </div>
        </div>
      )}

      <section className="content-section intro-section" id="little-world">
        <div className="section-heading"><span className="eyebrow">A SMALL SPACE WITH ROOM TO GROW</span><h2>Little moments. Many possibilities.</h2><p>This family-made corner celebrates the simple things that make childhood special: care, curiosity, imagination, and discovery.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">✧</span><h3>Little moments</h3><p>A gentle place for family stories and everyday memories, shared only with care.</p></article>
          <article className="feature-card"><span className="feature-icon">◈</span><h3>Playful discovery</h3><p>Creative ideas and simple learning starters to explore together over time.</p></article>
          <article className="feature-card"><span className="feature-icon">♫</span><h3>Stories &amp; music</h3><p>Family-selected audio and stories, with personal files staying on the device.</p></article>
        </div>
      </section>

      <section className="content-section source-section">
        <div><span className="eyebrow">LITTLE MOMENTS</span><h2>A story that can unfold in its own time.</h2><p>This page keeps the focus on wonder and family care, without publishing private dates, routines, or personal details.</p></div>
        <a className="secondary-button" href="/timeline.html">Visit the moments page <ArrowUpRight size={15} /></a>
      </section>

      <LanguageShowcase />

      <section className="content-section listen-section" aria-labelledby="listen-heading">
        <div className="listen-card">
          <span className="eyebrow">A FAMILY MUSIC CORNER</span>
          <h2 id="listen-heading">A little music, a little magic.</h2>
          <p>Family members can choose suitable audio for shared listening. Any files selected for the player stay in that browser on that device.</p>
          <a className="primary-button" href="#listen">Open music player <AudioLines size={16} /></a>
          <p className="privacy-caption">No personal listening history is sent to this site.</p>
        </div>
      </section>

      <section className="content-section source-section">
        <div><span className="eyebrow">MADE BY FAMILY</span><h2>Shared with care.</h2><p>This website is managed by family and keeps personal details private. It has no public contact form, comments, or child account.</p></div>
        <a className="secondary-button" href="/about.html">Learn about the project <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main id="main" className="page-main about-page" tabIndex={-1}>
      <section className="about-hero">
        <span className="eyebrow">ABOUT THIS LITTLE WORLD</span>
        <h1>A family-made corner for <span className="gradient-text">curiosity</span> and care.</h1>
        <p>Noa’s Little World is created and managed by family. It celebrates a child’s early journey without turning childhood into a public profile or sharing private details.</p>
        <div className="hero-actions">
          <ProjectSourceButton />
          <a className="secondary-button" href={PROTECTED_USERS_URL}>Family-only area <ArrowUpRight size={15} /></a>
        </div>
      </section>
      <section className="content-section about-details">
        <div className="section-heading"><span className="eyebrow">WHAT MATTERS HERE</span><h2>A small world built around big values.</h2></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">✧</span><h3>Curiosity</h3><p>There is something new and wonderful to notice in every day.</p></article>
          <article className="feature-card"><span className="feature-icon">♡</span><h3>Kindness</h3><p>Care, patience, and family make a safe place to grow.</p></article>
          <article className="feature-card"><span className="feature-icon">☼</span><h3>Imagination</h3><p>Stories, music, and playful ideas can lead anywhere.</p></article>
        </div>
      </section>
      <section className="content-section source-section">
        <div><span className="eyebrow">THE PROJECT</span><h2>Built thoughtfully by family.</h2><p>The public pages are static. Optional family sign-in is limited to guardian-approved adult GitHub accounts configured on the API.</p></div>
        <a className="secondary-button" href={SOURCE_URL} target="_blank" rel="noreferrer"><Github size={17} /> View project source <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}

function EcoFooter() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <footer className="eco-footer">
      <span className="footer-license">© @eco 2026 · Made by family · Noa’s Little World</span>
      <MusicPlayer />
      <a className="footer-github-link" href={PROJECT_URL} target="_blank" rel="noreferrer" aria-label="View the family-managed project source">
        <Github size={19} />
      </a>
      <div className="footer-meta">
        <time dateTime={now.toISOString()}>{now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</time>
        <a href="https://github.com/NoaOuahbi/NoaOuahbi.github.io/blob/main/TERMS.md" target="_blank" rel="noreferrer">Site notes</a>
        <a href="https://github.com/NoaOuahbi/NoaOuahbi.github.io/blob/main/SECURITY.md" target="_blank" rel="noreferrer">Privacy &amp; security</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = window.localStorage.getItem(NOA_STORAGE_KEYS.theme)
        ?? readNoaCookie(NOA_STORAGE_KEYS.cookieTheme)
        ?? window.localStorage.getItem('noa-world:theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });
  const isAbout = pathname.endsWith('/about.html');
  const isTimeline = pathname.endsWith('/timeline.html');
  const isProtectedUsers = pathname.startsWith('/protectedUSERS_root_path_secure');

  useEffect(() => {
    const appPaths = new Set(['/', '/index.html', '/about.html', '/timeline.html', PROTECTED_USERS_URL]);
    const handleNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor || (anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || !appPaths.has(destination.pathname)) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) {
        if (destination.hash !== window.location.hash) return;
        event.preventDefault();
        return;
      }
      event.preventDefault();
      window.history.pushState(null, '', destination.href);
      setPathname(destination.pathname);
    };
    const handleHistoryNavigation = () => setPathname(window.location.pathname);
    document.addEventListener('click', handleNavigation);
    window.addEventListener('popstate', handleHistoryNavigation);
    return () => {
      document.removeEventListener('click', handleNavigation);
      window.removeEventListener('popstate', handleHistoryNavigation);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.title = isProtectedUsers
      ? "Guardian Access | Noa's Little World"
      : isTimeline
        ? 'Little Moments | Noa’s Little World'
        : isAbout
          ? 'Our Story | Noa’s Little World'
          : 'Noa’s Little World';
    try {
      window.localStorage.setItem(NOA_STORAGE_KEYS.theme, theme);
      setNoaCookie(NOA_STORAGE_KEYS.cookieTheme, theme);
      writeSessionPreference('theme', theme);
    } catch {
      // The selected theme remains active for this page even if storage is disabled.
    }
  }, [isAbout, isProtectedUsers, isTimeline, theme]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'b') {
        event.preventDefault();
        setLeftOpen((open) => !open);
      } else if (event.ctrlKey && event.key.toLowerCase() === 'm') {
        event.preventDefault();
        setRightOpen((open) => !open);
      } else if (event.key === 'Escape') {
        setLeftOpen(false);
        setRightOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const toggleSidebar = (side: 'left' | 'right') => {
    const setter = side === 'left' ? setLeftOpen : setRightOpen;
    setter((open) => !open);
  };

  const closeSidebar = (side: 'left' | 'right') => {
    (side === 'left' ? setLeftOpen : setRightOpen)(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Suspense fallback={<div className="three-background canvas-fallback" aria-hidden="true" />}>
        <ThreeBackground theme={theme} />
      </Suspense>
      <div className="eco-public-layout">
        <EcoHeader
          leftOpen={leftOpen}
          rightOpen={rightOpen}
          onToggleLeft={() => toggleSidebar('left')}
          onToggleRight={() => toggleSidebar('right')}
        />
        <div className="main-container">
          <EcoLeftSidebar open={leftOpen} onClose={() => closeSidebar('left')} />
          {isProtectedUsers ? <ProtectedUsersPage /> : isTimeline ? <TimelinePage /> : isAbout ? <AboutPage /> : <HomePage />}
          <EcoRightSidebar
            open={rightOpen}
            onClose={() => closeSidebar('right')}
            theme={theme}
            onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
          />
        </div>
        <EcoFooter />
      </div>
    </>
  );
}
