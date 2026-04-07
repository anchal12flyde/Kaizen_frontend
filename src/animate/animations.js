export const ultraSmoothFade = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
