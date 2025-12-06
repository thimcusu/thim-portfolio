import { motion } from 'framer-motion';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
  const baseClasses = 'relative inline-block px-7 py-5 font-mono text-sm rounded group bg-navy';

  const variantClasses = {
    primary: 'border-2 border-primary text-primary',
    secondary: 'border-2 border-slate-light text-slate-light',
  };

  const content = (
    <>
      {/* Animated background */}
      <motion.span
        className="absolute inset-0 bg-primary/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {/* Sliding overlay */}
      <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

      {/* Ripple effect on corners */}
      <span className="absolute top-0 left-0 w-2 h-2 bg-primary transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-primary transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="absolute bottom-0 left-0 w-2 h-2 bg-primary transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="absolute bottom-0 right-0 w-2 h-2 bg-primary transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out" />

      {/* Text content */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{children}</span>
    </>
  );

  if (href) {
    const { onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...linkProps } =
      props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        whileHover={{
          scale: 1.05,
          y: -8,
          boxShadow: '0 20px 40px rgba(100, 255, 218, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        {...linkProps}
      >
        {content}
      </motion.a>
    );
  }

  const { onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...safeButtonProps } =
    props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: '0 20px 40px rgba(100, 255, 218, 0.3)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...safeButtonProps}
    >
      {content}
    </motion.button>
  );
}
