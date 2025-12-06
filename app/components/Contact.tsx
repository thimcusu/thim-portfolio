import { motion } from 'framer-motion';

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-16 max-w-2xl scroll-mt-16 py-24 text-center md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <p className="mb-5 font-mono text-base text-primary-light dark:text-primary">04. What's Next?</p>
      <h2 className="mb-5 text-5xl font-bold text-light-text dark:text-slate-lightest">Get In Touch</h2>
      <p className="mb-12 text-lg leading-relaxed text-light-text-muted dark:text-slate">
        I'm currently open to new challenges and opportunities! Let's reach out.
      </p>
      <a
        href="mailto:hcaothiem@gmail.com"
        className="inline-block rounded border-2 border-primary-light px-7 py-5 font-mono text-sm text-primary-light transition-all hover:bg-primary-light/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10"
      >
        Say Hello
      </a>
    </motion.section>
  );
}
