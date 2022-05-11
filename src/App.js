import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScreenProvider } from "./contexts/DeviceContext";
import { AnimatePresence } from "framer-motion";
import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(window.localStorage.getItem("dark-mode-enabled")) || false
  );

  useDarkMode(darkMode);

  return (
    <ScreenProvider>
      <div className="App theme-transition font-text md:font-display min-w-full">
        <AnimatePresence>
          <Router>
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode((prevMode) => !prevMode)}
            />
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="*" element={<Homepage />} />
            </Routes>
            <Footer />
          </Router>
        </AnimatePresence>
      </div>
    </ScreenProvider>
  );
};

export default App;
