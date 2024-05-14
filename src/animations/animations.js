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
export const slideInFromRightVariant = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const slideInFromBottomVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1.1,
    },
  },
};

// fading animations
export const fadeVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const fadeInFromBottom = {
  hidden: {
    opacity: 0,
    y: 30, // Move from bottom
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
      duration: 1.5,
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
      duration: 1.5,
      type: "tween",
    },
  },
};

// stagger
export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2, // adjust stagger duration as needed
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // adjust duration as needed
    },
  },
};
