import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScreen } from "../contexts/DeviceContext";
import { BsArrowDownShort } from "react-icons/bs";

const About = ({ aboutRef }) => {
  const isSmallScreen = useScreen();
  const animation = useAnimation();
  const [emojiHover, setEmojiHover] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      if (emojiHover) {
        await animation.start({
          scale: 1.2,
          transition: { duration: 0.1, ease: "easeOut" },
        });
        await animation.start({
          rotate: [0, 40, 0],
          transition: { delay: 0.5, duration: 1 },
        });
        if (emojiHover === "clicked") {
          animation.start({ scale: 1 });
          return setEmojiHover(false);
        }
      } else {
        return await animation.start({ scale: 1 });
      }
    };
    sequence();
  }, [emojiHover]);

  return (
    <section
      id="about"
      ref={aboutRef}
      style={{
        height: isSmallScreen
          ? window.innerHeight - 64 // 64px === 4rem
          : window.innerHeight - 56, // 56px === 3.5rem
      }}
    >
      <div className="wrapper flex flex-col justify-center items-start">
        <motion.span
          className="text-9xl select-none mb-5"
          role="img"
          aria-label="emoji-wave"
          aria-hidden={false}
          onMouseEnter={() => setEmojiHover(true)}
          onMouseLeave={() => setEmojiHover(false)}
          onClick={() => setEmojiHover("clicked")}
          animate={animation}
          whileInView={{
            rotate: [0, 40, 0],
            transition: { delay: 0.5, duration: 1 },
          }}
          tabIndex={0}
        >
          👋
        </motion.span>
        <h1
          className="section-title text-5xl md:text-8xl font-bold text-yellow-500 my-1"
          tabIndex={0}
        >
          Hello!
        </h1>
        <h2 className="text-4xl md:text-6xl my-1 mb-3" tabIndex={0}>
          I'm Hei In. I tinker with tech.
        </h2>
        <p className="flex flex-row justfy-start items-center my-1 mt-10 text-lg">
          <motion.span
            className="inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <BsArrowDownShort size="2rem" />
          </motion.span>
          Scroll down to see my work
        </p>
      </div>
    </section>
  );
};
export default About;
