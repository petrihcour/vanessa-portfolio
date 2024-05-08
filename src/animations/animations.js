

// exit animation
export const exitVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// sliding animations
export const slideVariant = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

// fading animations
export const fadeVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.1,
    },
  },
};

export const fadeInFromBottom = {
    hidden: {
      opacity: 0,
      y: 50, // Move from bottom
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        type: "tween",
      },
    },
  };

export const fadeInFromLeft = {
  hidden: {
    opacity: 0,
    x: -50, // Move from left
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      type: "tween",
    },
  },
};

export const fadeInFromRight = {
  hidden: {
    opacity: 0,
    x: 50, // Move from right
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      type: "tween",
    },
  },
};
