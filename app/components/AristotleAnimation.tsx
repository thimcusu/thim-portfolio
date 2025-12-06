import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function AristotleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for cursor following
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position to eye/eyebrow movement ranges
  const eyeOffsetX = useTransform(smoothMouseX, [-400, 400], [-8, 8]);
  const eyeOffsetY = useTransform(smoothMouseY, [-400, 400], [-8, 8]);
  const eyebrowOffsetY = useTransform(smoothMouseY, [-400, 400], [3, -3]);
  const eyebrowRotate = useTransform(smoothMouseX, [-400, 400], [-2, 2]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[500px] flex items-center justify-center" onMouseMove={handleMouseMove}>
      {/* Background floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, `${Math.random() * -100 - 20}%`],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main artistic canvas */}
      <motion.div
        className="relative w-full max-w-md aspect-square"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Canvas frame with depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bg-light/80 to-bg-lighter/60 backdrop-blur-sm border border-primary/20 shadow-2xl overflow-hidden">
          {/* Canvas texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%2364ffda' fill-opacity='0.03'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Artistic portrait in circular frame */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Circular teal background */}
            <motion.div
              className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-primary/10 shadow-lg"
              animate={{
                boxShadow: [
                  '0 10px 40px rgba(100, 255, 218, 0.2)',
                  '0 20px 60px rgba(100, 255, 218, 0.4)',
                  '0 10px 40px rgba(100, 255, 218, 0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Aristotle portrait - artistic illustration */}
            <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
              <defs>
                <radialGradient id="faceGrad">
                  <stop offset="0%" stopColor="#e6f1ff" />
                  <stop offset="100%" stopColor="#ccd6f6" />
                </radialGradient>
                <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8892b0" />
                  <stop offset="100%" stopColor="#495670" />
                </linearGradient>
              </defs>

              {/* Head */}
              <ellipse cx="100" cy="95" rx="45" ry="52" fill="url(#faceGrad)" stroke="#8892b0" strokeWidth="2" />

              {/* Hair - Greek style with curls */}
              <path
                d="M 55 75 Q 52 60 55 45 Q 60 32 75 28 Q 90 26 100 26 Q 110 26 125 28 Q 140 32 145 45 Q 148 60 145 75 L 140 80 Q 135 70 130 75 L 125 78 Q 120 68 115 75 L 110 77 Q 105 67 100 77 L 95 77 Q 90 67 85 75 L 80 78 Q 75 68 70 75 L 60 80 Z"
                fill="url(#hairGrad)"
                stroke="#8892b0"
                strokeWidth="1.5"
              />

              {/* Forehead wrinkles (wisdom) */}
              <path d="M 70 62 Q 100 60 130 62" stroke="#a8b2d1" strokeWidth="0.8" opacity="0.6" fill="none" />
              <path d="M 72 68 Q 100 66 128 68" stroke="#a8b2d1" strokeWidth="0.8" opacity="0.5" fill="none" />

              {/* Eyes */}
              <ellipse cx="85" cy="88" rx="6" ry="7" fill="#495670" />
              <ellipse cx="115" cy="88" rx="6" ry="7" fill="#495670" />
              <circle cx="86" cy="87" r="2" fill="#64ffda" opacity="0.8" />
              <circle cx="116" cy="87" r="2" fill="#64ffda" opacity="0.8" />

              {/* Eyebrows */}
              <path d="M 72 78 Q 85 76 96 78" stroke="#8892b0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 104 78 Q 115 76 128 78" stroke="#8892b0" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Nose */}
              <path d="M 100 82 L 100 102" stroke="#8892b0" strokeWidth="1.8" />
              <path d="M 95 102 Q 100 105 105 102" stroke="#8892b0" strokeWidth="1.5" fill="none" />

              {/* Beard */}
              <path
                d="M 65 110 Q 62 120 63 132 Q 65 142 72 148 Q 85 152 100 152 Q 115 152 128 148 Q 135 142 137 132 Q 138 120 135 110 Q 132 108 128 108 L 72 108 Q 68 108 65 110 Z"
                fill="url(#hairGrad)"
                stroke="#8892b0"
                strokeWidth="1.5"
              />

              {/* Beard texture */}
              <path d="M 75 118 Q 73 125 75 132" stroke="#a8b2d1" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 88 120 Q 86 127 88 134" stroke="#a8b2d1" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 100 121 Q 98 128 100 135" stroke="#a8b2d1" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 112 120 Q 114 127 112 134" stroke="#a8b2d1" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 125 118 Q 127 125 125 132" stroke="#a8b2d1" strokeWidth="1.5" fill="none" opacity="0.6" />

              {/* Toga */}
              <path
                d="M 55 145 Q 52 155 55 170 L 80 175 Q 90 176 100 176 Q 110 176 120 175 L 145 170 Q 148 155 145 145"
                fill="#e6f1ff"
                stroke="#8892b0"
                strokeWidth="1.5"
                opacity="0.95"
              />
              <path d="M 75 152 Q 77 162 75 172" stroke="#ccd6f6" strokeWidth="1.2" fill="none" opacity="0.6" />
              <path d="M 100 150 Q 100 162 100 174" stroke="#ccd6f6" strokeWidth="1.2" fill="none" opacity="0.6" />
              <path d="M 125 152 Q 123 162 125 172" stroke="#ccd6f6" strokeWidth="1.2" fill="none" opacity="0.6" />
            </svg>

            {/* Name signature */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-max"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="font-serif text-xl tracking-wide text-text-primary px-4 py-1.5 bg-bg-light/90 backdrop-blur-sm rounded-full border border-primary shadow-md">
                Aristotle
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ambient glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
