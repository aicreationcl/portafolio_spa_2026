import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const navUnderline: Variants = {
  inactive: { scaleX: 0 },
  active: { scaleX: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

export const menuPanel: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
};
