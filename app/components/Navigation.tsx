import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTheme = () => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  };

  const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full bg-light-surface dark:bg-navy`}>
      <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-6 md:px-12 lg:px-24">
        <Link
          to="/"
          className="font-mono text-2xl font-bold text-primary-light transition-colors hover:text-primary-light/80 dark:text-primary dark:hover:text-primary/80"
        >
          <span className="text-primary-light dark:text-primary">THIM</span>
        </Link>
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="hidden font-mono text-sm text-light-text-secondary transition-colors hover:text-primary-light dark:text-slate dark:hover:text-primary sm:block"
          >
            <span className="text-primary-light dark:text-primary">01.</span> About
          </a>
          <a
            href="#experience"
            className="hidden font-mono text-sm text-light-text-secondary transition-colors hover:text-primary-light dark:text-slate dark:hover:text-primary sm:block"
          >
            <span className="text-primary-light dark:text-primary">02.</span> Experience
          </a>
          <a
            href="#work"
            className="hidden font-mono text-sm text-light-text-secondary transition-colors hover:text-primary-light dark:text-slate dark:hover:text-primary sm:block"
          >
            <span className="text-primary-light dark:text-primary">03.</span> Work
          </a>
          <a
            href="#contact"
            className="hidden font-mono text-sm text-light-text-secondary transition-colors hover:text-primary-light dark:text-slate dark:hover:text-primary sm:block"
          >
            <span className="text-primary-light dark:text-primary">04.</span> Contact
          </a>
          <button
            onClick={toggleTheme}
            className="rounded p-2 text-light-text-secondary transition-all hover:text-primary-light dark:text-slate dark:hover:text-primary"
            aria-label="Toggle theme"
            title={getTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {getTheme() === 'dark' ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          <a
            href="/profile.jpg"
            download="CV.jpg"
            className="flex items-center gap-2 rounded border border-primary-light px-4 py-2 font-mono text-sm text-primary-light transition-all hover:bg-primary-light/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
