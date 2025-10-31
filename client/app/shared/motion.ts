export const slideInFromLeft = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

export const slideInFromRight = (delay: number) => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

export const slideInFromTop = (delay: number) => {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
  };
};

export const slideInFromBottom = (delay: number) => {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};
export const linkVariants = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const containerVariants = {
  open: {
    x: "100%",
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  closed: {
    x: "200%",
    transition: {
      when: "afterChildren",
      duration: 0.5,
      delay: 0.5,
    },
  },
};
