import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    title: 'B2C E-commerce Platform',
    description:
      'A comprehensive B2C food-ordering platform built with Ec-cube CMS, enabling seamless online ordering experiences. Leveraged the CMS architecture for rapid content updates, dynamic menu management, and flexible feature deployment. Implemented responsive UI components with jQuery and integrated SwiperJS for smooth product carousels, enhancing user engagement and conversion rates.',
    image: '/images/b2c-ecommerce.png',
    technologies: ['Ec-cube', 'JavaScript', 'JQuery', 'SwiperJS'],
  },
  {
    title: 'Portal of Chambers',
    description:
      'A unified digital application portal for German tax consultants chambers (StBK), developed as part of the OZG implementation to digitalize administrative services. Built with A12 low-code framework and React, the platform provides online access to administrative services for chamber members and third parties. Features include digital form submissions, document management, case tracking, and compliance with German public-sector digitalization standards.',
    image: '/images/stbk.png',
    technologies: ['React', 'Redux', 'ReduxSaga', 'A12', 'styled-components'],
    external: 'https://stbk-antragsportal.de/',
  },
  {
    title: 'Clerk portal',
    description:
      'An administrative management system for tax chamber clerks to oversee training organizations for tax advisors and consultants. The platform enables clerks to manage member registrations, training program approvals, certification tracking, and organizational oversight. Features integrated document processing, workflow automation, and comprehensive reporting dashboards.',
    image: '/images/sbap.png',
    technologies: ['React', 'Redux', 'ReduxSaga', 'A12', 'styled-components'],
  },
  {
    title: 'IoT Driving Activity Dashboard',
    description:
      'A IoT monitoring system for tracking and visualizing driving activities. The platform processes telemetry data from vehicle ans show reports by maps, performance charts, and canvas-based graphics. Features include trip history analysis, driving behavior metrics, geofencing alerts',
    technologies: ['JavaScript', 'Leaflet.js', 'Chart.js', 'Canvas API'],
  },
  {
    title: 'Juice Club',
    description:
      'A premium content subscription platform featuring tiered membership access, secure payment gateway integration, and gated content delivery, implementing user authentication, role-based access control, and subscription management. Enabling creators to monetize exclusive articles, videos, and multimedia content through flexible subscription tiers and pay-per-view models.',
    technologies: ['Thymeleaf', 'JavaScript', 'Video.js'],
  },
  {
    title: 'Cloud Upload App',
    description:
      'A cross-platform desktop application built with Electron for seamless cloud file uploads. This lightweight tool provides a native desktop experience for managing file transfers to cloud storage services. Features drag-and-drop functionality, upload progress tracking, batch processing.',
    technologies: ['Electronjs', 'React', 'Nodejs'],
  },
];

export function Projects() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="py-24"
    >
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-10 text-light-text dark:text-slate-lightest">
        <span className="text-primary-light dark:text-primary font-mono text-2xl font-normal">03.</span>
        Some Things I've Built
        <span className="flex-1 h-px bg-light-border dark:bg-slate/20 ml-6"></span>
      </h2>
      <div className="flex flex-col gap-24">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`grid ${project.image ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-4 items-center ${i % 2 === 0 ? '' : 'lg:dir-rtl'}`}
          >
            {/* Image */}
            {project.image && (
              <div className="lg:col-span-7 relative group">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded bg-primary-light/10 dark:bg-primary/10"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover aspect-video" />
                  <div className="absolute inset-0 bg-primary-light/20 group-hover:bg-transparent transition-all dark:bg-primary/20"></div>
                </a>
              </div>
            )}

            {/* Content */}
            <div className={`${project.image ? 'lg:col-span-5' : ''} ${i % 2 === 0 ? '' : 'lg:text-right'}`}>
              <p className="font-mono text-primary-light dark:text-primary text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-light-text dark:text-slate-lightest mb-4 hover:text-primary-light dark:hover:text-primary transition-colors">
                <a href={project.external} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <div className="bg-light-surface dark:bg-navy-light p-6 rounded shadow-lg mb-4">
                <p className="text-light-text-muted dark:text-slate-light leading-relaxed">{project.description}</p>
              </div>
              <ul
                className={`flex flex-wrap gap-4 font-mono text-sm text-light-text-muted dark:text-slate-light mb-4 ${i % 2 === 0 ? '' : 'lg:justify-end'}`}
              >
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={`flex gap-4 ${i % 2 === 0 ? '' : 'lg:justify-end'}`}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-muted hover:text-primary-light transition-colors dark:text-slate-light dark:hover:text-primary"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-muted hover:text-primary-light transition-colors dark:text-slate-light dark:hover:text-primary"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
