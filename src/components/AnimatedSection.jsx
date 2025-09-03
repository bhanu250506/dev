import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AnimationSection = ({
  children,
  delay = 0.2,
  duration = 0.8,
  direction = "up", // 'up' | 'down' | 'left' | 'right'
  stagger = 0.15,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Direction-based animation offset
  const offset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.95, ...offset[direction] },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration,
            delay,
            staggerChildren: stagger,
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimationSection;
