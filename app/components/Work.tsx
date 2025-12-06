import { motion } from 'framer-motion';
import { useState } from 'react';

const experiences = [
  {
    company: 'Upstatement',
    title: 'Lead Engineer',
    period: 'May 2018 - Present',
    url: 'https://upstatement.com/',
    description: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
    ],
  },
  {
    company: 'Apple',
    title: 'UI Engineer',
    period: 'July - December 2017',
    url: 'https://www.apple.com/',
    description: [
      "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music's embeddable web player widget",
      'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal API integrations',
      "Architected and implemented the front-end of Apple Music's embeddable web player widget",
    ],
  },
  {
    company: 'Starry',
    title: 'Software Engineer',
    period: 'July - December 2016',
    url: 'https://starry.com/',
    description: [
      "Engineered and improved major features of Starry's customer-facing Android app",
      'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router',
      'Collaborated with designers and other developers to create thoughtful user experiences',
    ],
  },
];

export function Work() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="py-24"
    >
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-10 text-light-text dark:text-slate-lightest">
        <span className="text-primary-light dark:text-primary font-mono text-2xl font-normal">02.</span>
        Where I've Worked
        <span className="flex-1 h-px bg-light-border dark:bg-slate/20 ml-6"></span>
      </h2>
      <div className="flex gap-4 md:gap-8">
        {/* Tab List */}
        <div className="flex flex-col border-l-2 border-light-border dark:border-navy-lighter">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-left px-6 py-3 font-mono text-sm transition-all border-l-2 -ml-[2px] ${
                activeTab === i
                  ? 'border-primary-light text-primary-light bg-light-surface/50 dark:border-primary dark:text-primary dark:bg-navy-light/50'
                  : 'border-transparent text-light-text-muted hover:bg-light-surface/30 hover:text-primary-light dark:text-slate dark:hover:bg-navy-light/30 dark:hover:text-primary'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div className="flex-1">
          <h3 className="text-xl font-medium text-light-text dark:text-slate-lightest mb-2">
            {experiences[activeTab].title}{' '}
            <a
              href={experiences[activeTab].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline dark:text-primary"
            >
              @ {experiences[activeTab].company}
            </a>
          </h3>
          <p className="font-mono text-sm text-light-text-secondary dark:text-slate-light mb-6">{experiences[activeTab].period}</p>
          <ul className="space-y-4">
            {experiences[activeTab].description.map((item, i) => (
              <li key={i} className="flex gap-3 text-light-text-muted dark:text-slate-light leading-relaxed">
                <span className="text-primary-light dark:text-primary mt-1">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
