"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const viewport = { once: true, amount: 0.2 } as const;

type MotionDivProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Fade + slide up when scrolled into view */
export function MotionFadeUp({
  children,
  className,
  delay = 0,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Scale in when scrolled into view */
export function MotionScaleIn({
  children,
  className,
  delay = 0,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Stagger children on scroll into view */
export function MotionStagger({
  children,
  className,
  fast = false,
  ...props
}: MotionDivProps & { fast?: boolean }) {
  return (
    <motion.div
      variants={fast ? staggerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Child item for MotionStagger */
export function MotionItem({
  children,
  className,
  ...props
}: MotionDivProps) {
  return (
    <motion.div variants={fadeUp} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/** Section heading block with underline */
export function MotionSectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <MotionFadeUp className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h2>
      <motion.div
        className="w-20 h-1 bg-indigo-500 mx-auto rounded-full origin-center"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </MotionFadeUp>
  );
}

export { motion };
