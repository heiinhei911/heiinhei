import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useScreen } from "../contexts/DeviceContext";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const Homepage = () => {
  const isSmallScreen = useScreen();
  const location = useLocation();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const sectionStyle = {
    minHeight: isSmallScreen ? window.innerHeight : "max-content",
  };

  useEffect(() => {
    if (location.hash !== "") {
      const scrollTo =
        location.hash === "#home"
          ? aboutRef.current.offsetTop
          : location.hash === "#projects"
          ? projectsRef.current.offsetTop
          : contactRef.current.offsetTop;
      const mobileScrollTo = scrollTo - 175;

      window.scrollTo({
        top: isSmallScreen ? mobileScrollTo : scrollTo,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <motion.main
      className="homepage"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} style={sectionStyle} />
      <Contact contactRef={contactRef} style={sectionStyle} />
    </motion.main>
  );
};
export default Homepage;
