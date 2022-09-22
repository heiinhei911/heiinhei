import { useEffect, useState } from "react";
import { useScreen } from "../contexts/DeviceContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { v4 as uuid } from "uuid";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const isSmallScreen = useScreen();
  const [expand, setExpand] = useState(!isSmallScreen);

  useEffect(() => {
    setExpand(!isSmallScreen);
  }, [isSmallScreen]);

  const togglePrevMode = () => {
    setExpand((prevExpand) => !prevExpand);
  };

  const collapsedMenuItems = [
    <Link to={{ pathname: "/", hash: "#home" }} tabIndex={expand ? 4 : 0}>
      About
    </Link>,
    <Link to={{ pathname: "/", hash: "#projects" }} tabIndex={expand ? 5 : 0}>
      Projects
    </Link>,
    <Link to={{ pathname: "/", hash: "#contact" }} tabIndex={expand ? 6 : 0}>
      Contact
    </Link>,
  ].map((item) => (
    <motion.li
      className="navbar-items"
      key={uuid()}
      onClick={() => isSmallScreen && togglePrevMode}
      onKeyDown={() => isSmallScreen && togglePrevMode}
    >
      {item}
    </motion.li>
  ));

  return (
    <header>
      <motion.nav
        className={`theme-transition ${
          expand ? "shadow dark:shadow-white md:shadow-none lg:shadow-none" : ""
        }`}
        initial={{
          opacity: 0,
          height: isSmallScreen ? "4rem" : "3.5rem",
        }}
        animate={{
          opacity: 1,
          height: !isSmallScreen ? "3.5rem" : expand ? "15rem" : "4rem",
        }}
        exit={{ opacity: 0 }}
      >
        <ul className="wrapper grid grid-rows-[repeat(5,auto)] grid-cols-[2fr_repeat(2,1fr)] md:grid-cols-[fit-content(20%)_minmax(0,1fr)_repeat(3,minmax(0,10%))_5%] md:grid-rows-1 text-lg">
          <h1 className="row-span-5 md:row-auto btns flex flex-col justify-center items-start text-xl font-semibold md:text-2xl">
            <Link to={{ pathname: "/" }} tabIndex={expand ? 1 : 0}>
              Hei In Sam
            </Link>
          </h1>
          <li className="col-span-2 md:col-auto flex flex-row justify-end items-center md:flex-col md:justify-center md:items-end">
            <a
              href="https://github.com/heiinhei911"
              target="_blank"
              rel="noreferrer"
              tabIndex={expand ? 2 : 0}
            >
              <BsGithub size="1.2rem" className="btns mr-5 md:mr-3" />
            </a>
            <span
              className="md:hidden cursor-pointer flex flex-row justify-end items-center text-right my-2"
              onClick={togglePrevMode}
              onKeyDown={togglePrevMode}
              tabIndex={expand ? 3 : 0}
            >
              {expand ? <MdClose size="1.5rem" /> : <IoMenu size="1.5rem" />}
            </span>
          </li>
          {expand && (
            <>
              {collapsedMenuItems}
              <li className="col-span-2 md:col-auto flex flex-row justify-end md:justify-center items-center my-2 md:my-0 transition-colors">
                {isSmallScreen && (
                  <p className="mr-2 font-semibold">
                    {darkMode ? "Dark" : "Light"} Mode
                  </p>
                )}
                <span
                  className={`cursor-pointer w-7 h-4 rounded-xl flex flex-row ${
                    darkMode ? "justify-end" : "justify-start"
                  } items-center bg-black dark:bg-white px-px relative group`}
                  onClick={toggleDarkMode}
                  onKeyDown={toggleDarkMode}
                  tabIndex={0}
                >
                  <motion.span
                    className="rounded-full w-3.5 h-3.5 bg-white dark:bg-black pc-hover:hover:border pc-hover:hover:border-black dark:pc-hover:hover:border-white"
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  {!isSmallScreen && (
                    <span className="absolute top-7 right-0 mx-auto min-w-max px-2 py-1 text-sm border border-black dark:border-white bg-neutral-900 dark:bg-white text-neutral-100 dark:text-neutral-900 rounded-md whitespace-nowrap text-right transition-all scale-0 pc-hover:group-hover:scale-100">
                      {darkMode ? "Dark" : "Light"} Mode
                    </span>
                  )}
                </span>
              </li>
            </>
          )}
        </ul>
      </motion.nav>
    </header>
  );
};
export default Navbar;
