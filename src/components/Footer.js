import { motion } from "framer-motion";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className="theme-transition"
    >
      <div className="wrapper flex flex-col justify-center items-start md:grid md:grid-cols-2">
        <h1
          className="font-medium text-right text-yellow-500 md:text-left md:order-1"
          tabIndex={0}
        >
          Designed && Coded by Hei In Sam
        </h1>
        <p className="md:order-3" tabIndex={0}>
          {new Date().getFullYear()}
        </p>
        <div className="mr-3 md:mr-0 mt-3 md:mt-0 md:order-last md:flex md:flex-col md:justify-center md:items-end">
          <BsArrowUpCircle
            size="1.8rem"
            className="btns"
            onKeyDown={scrollToTop}
            onClick={scrollToTop}
            tabIndex={0}
          />
        </div>
        <p className="md:ml-auto md:text-right md:order-2" tabIndex={0}>
          Back to Top
        </p>
      </div>
    </motion.footer>
  );
};
export default Footer;
