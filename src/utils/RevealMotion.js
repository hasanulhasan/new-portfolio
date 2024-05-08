import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RevealMotion({ children, width = "auto" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainTextControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainTextControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainTextControl}
        transition={{ duration: 0.5, delay: 0.20 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#ff014f",
          zIndex: 20,
        }}
      /> */}
    </div>
  );
}
