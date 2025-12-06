import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/cv')({
  component: CV,
});

function CV() {
  return (
    <div className="min-h-screen p-16 max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-8 opacity-70 hover:opacity-100 text-slate-200 hover:text-teal-300 transition-all">
        ← Back to Home
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-8 text-slate-200">Curriculum Vitae</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">Experience</h2>
          <div className="mb-8">
            <h3 className="text-xl mb-2 text-slate-200">Senior Developer • Company Name</h3>
            <p className="text-slate-400 mb-2">2020 - Present</p>
            <p className="text-slate-400">Description of your role and achievements.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl mb-2 text-slate-200">Developer • Previous Company</h3>
            <p className="text-slate-400 mb-2">2018 - 2020</p>
            <p className="text-slate-400">Description of your role and achievements.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">Education</h2>
          <div className="mb-8">
            <h3 className="text-xl mb-2 text-slate-200">Bachelor's Degree in Computer Science</h3>
            <p className="text-slate-400 mb-2">University Name • 2014 - 2018</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'TanStack', 'Framer Motion'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-slate-800 rounded text-slate-400">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
