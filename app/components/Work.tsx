import { motion } from 'framer-motion';
import { useState } from 'react';

interface Experience {
  company: string;
  title: string;
  period: string;
  url?: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: 'mgm technology partners',
    title: 'Frontend Developer',
    period: 'July 2022 - Present',
    url: 'https://www.mgm-tp.com/',
    description: [
      'Build web applications using modern front-end frameworks, collaborating effectively with back-end teams and international colleagues to consistently deliver high-quality results',
      'Leverage internal low-code platforms to accelerate development cycles and enhance digital workflow processes for public-sector clients across Germany',
      'Contribute to the development of A12, an internal low-code library that enables business experts to efficiently create application components',
      'Support public-sector initiatives by helping digitalize administrative services for tax consultants chambers',
    ],
  },
  {
    company: 'Mynavi TechTus Vietnam',
    title: 'Frontend Developer',
    period: 'October 2020 - September 2022',
    url: 'https://www.mynavi.jp/',
    description: [
      'Worked with a variety of frameworks including Vanilla JavaScript and jQuery to speed up project development phases in offshore team environments',
      'Developed a B2C food-ordering website leveraging a CMS for rapid content and feature management',
      'Created an IoT solution for driving activity reporting, featuring visualizations using videos, maps, charts, and canvas graphics',
      'Became familiar with multiple programming languages while collaborating in international offshore teams',
    ],
  },
  {
    company: 'Code Engine Studio',
    title: 'Intern Frontend Developer',
    period: 'January 2020 - May 2020',
    description: [
      'Developed web applications using MERN stack (MongoDB, Express, React, Node.js)',
      'Participated in English training and learned professional work principles',
      'Gained hands-on experience with full-stack JavaScript development',
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
