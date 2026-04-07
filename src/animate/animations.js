export const ultraSmoothFade = {
  hidden: {
    opacity: 0,
    y: 0,
   
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      duration: 1.2, 
      filter: {
        duration: 0.1,
      },
    },
  }),
};
