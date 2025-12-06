import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-light-surface/75 px-6 py-5 backdrop-blur dark:bg-navy/75 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-light-text dark:text-slate-lightest lg:sr-only">About</h2>
      </div>
      <div>
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-light-text dark:text-slate-lightest">
          <span className="font-mono text-2xl font-normal text-primary-light dark:text-primary">01.</span>
          About Me
          <span className="ml-6 h-px flex-1 bg-light-border dark:bg-slate/20"></span>
        </h2>
        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-lg leading-7 text-light-text-muted dark:text-slate">
            <p>
              Hello! I'm a frontend developer passionate about creating modern web applications. Starting my career with the JavaScript
              ecosystem as a MERN stack intern in 2020, I progressed to building B2C e-commerce platforms and IoT solutions, working
              extensively with various frameworks in offshore environments.
            </p>
            <p>
              Since 2022, I've been at{' '}
              <a
                className="font-medium text-light-text transition-colors hover:text-primary-light focus-visible:text-primary-light dark:text-slate-lightest dark:hover:text-primary dark:focus-visible:text-primary"
                href="https://www.mgm-tp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                mgm technology partners
              </a>
              , collaborating with international teams. My current focus is working exclusively with React, leveraging modern internal
              frameworks to digitalize administrative services for public-sector clients across Germany.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 font-mono text-sm">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Redux-saga', 'Node.js', 'Styled-component', 'TailwindCSS'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary-light dark:text-primary">▹</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative">
            <div className="relative z-10 aspect-square overflow-hidden rounded bg-primary-light/20 dark:bg-primary/20">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover mix-blend-multiply grayscale contrast-100 transition-all duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
              />
            </div>
            <div className="absolute left-6 top-6 -z-10 h-full w-full rounded border-2 border-primary-light transition-all group-hover:left-4 group-hover:top-4 dark:border-primary"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
