import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function SandwormAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const wormX = useSpring(mouseX, springConfig);
  const wormY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(wormY, [-300, 300], [30, -30]);
  const rotateY = useTransform(wormX, [-300, 300], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* Sandworm body segments */}
        <div className="relative w-64 h-64">
          {/* Main worm body */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            {/* Worm segments */}
            {[...Array(8)].map((_, i) => {
              const delay = i * 0.1;
              return (
                <motion.g key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}>
                  {/* Segment body */}
                  <motion.ellipse
                    cx="100"
                    cy={60 + i * 15}
                    rx={40 - i * 2}
                    ry="12"
                    fill="#8B7355"
                    stroke="#5C4A3A"
                    strokeWidth="2"
                    animate={{
                      rx: [40 - i * 2, 42 - i * 2, 40 - i * 2],
                      ry: [12, 14, 12],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: delay,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Segment ridges */}
                  <motion.path
                    d={`M ${60 + i * 2} ${60 + i * 15} Q 100 ${55 + i * 15} ${140 - i * 2} ${60 + i * 15}`}
                    stroke="#5C4A3A"
                    strokeWidth="1.5"
                    fill="none"
                    animate={{
                      d: [
                        `M ${60 + i * 2} ${60 + i * 15} Q 100 ${55 + i * 15} ${140 - i * 2} ${60 + i * 15}`,
                        `M ${60 + i * 2} ${60 + i * 15} Q 100 ${57 + i * 15} ${140 - i * 2} ${60 + i * 15}`,
                        `M ${60 + i * 2} ${60 + i * 15} Q 100 ${55 + i * 15} ${140 - i * 2} ${60 + i * 15}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: delay,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.g>
              );
            })}

            {/* Worm mouth/head */}
            <motion.g
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ellipse cx="100" cy="50" rx="45" ry="18" fill="#8B7355" stroke="#5C4A3A" strokeWidth="2" />
              <circle cx="100" cy="50" r="35" fill="#2D2419" />
              {/* Teeth ring */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const x = 100 + Math.cos((angle * Math.PI) / 180) * 30;
                const y = 50 + Math.sin((angle * Math.PI) / 180) * 12;
                return (
                  <motion.polygon
                    key={i}
                    points={`${x},${y} ${x - 2},${y + 8} ${x + 2},${y + 8}`}
                    fill="#F5EBD9"
                    animate={{
                      points: [
                        `${x},${y} ${x - 2},${y + 8} ${x + 2},${y + 8}`,
                        `${x},${y} ${x - 2},${y + 10} ${x + 2},${y + 10}`,
                        `${x},${y} ${x - 2},${y + 8} ${x + 2},${y + 8}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}
            </motion.g>
          </svg>

          {/* Sand particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * 256,
                y: Math.random() * 256,
                opacity: 0,
              }}
              animate={{
                x: [Math.random() * 256, Math.random() * 256, Math.random() * 256],
                y: [Math.random() * 256, Math.random() * 256, Math.random() * 256],
                opacity: [0, 0.6, 0],
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
      </motion.div>
    </div>
  );
}
