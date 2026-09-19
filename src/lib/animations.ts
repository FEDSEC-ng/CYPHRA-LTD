"use client";

import {
  type Variants,
  type Transition,
} from "framer-motion";

export const springTransition: Transition = {
  type: "spring",
  damping: 40,
  stiffness: 200,
  mass: 1,
};

export const springFast: Transition = {
  type: "spring",
  damping: 50,
  stiffness: 200,
  mass: 1,
};

export const springSmooth: Transition = {
  type: "spring",
  damping: 60,
  stiffness: 200,
  mass: 1,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: springTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, transformPerspective: 1200 },
  visible: {
    opacity: 1,
    scale: 1,
    transformPerspective: 1200,
    transition: springTransition,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

export const headerSlideDown: Variants = {
  hidden: { y: -400, opacity: 0.001 },
  visible: {
    y: 0,
    opacity: 1,
    transition: springTransition,
  },
};
