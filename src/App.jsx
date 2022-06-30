import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/grid";
import Keyboard from "./components/keyboard";
import Modal from "./components/modal";
import Navbar from "./components/navbar";
import { setSolution } from "./constants/setSolution";
import { saveSolution, getSolution } from "./localStorage/functions";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [showModal, setShowModal] = useState({ type: null, show: false });
  const [currentBoard, setCurrentBoard] = useState(
    Array.from({ length: 25 }, (i) => i)
  );

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : prefersDarkMode
      ? true
      : false
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);

  const handleClick = (e) => {
    setShowModal(false);
  };

  const handleDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    !getSolution() && saveSolution(setSolution());
  }, []);

  return (
    <div className="max-w-md m-auto w-full mt-10 flex flex-col">
      <Navbar
        isDarkMode={isDarkMode}
        handleDarkMode={handleDarkMode}
        showModal={setShowModal}
      />

      <div className=" w-full m-auto md:mt-8 mt-10">
        <div className="pb-6 grow flex flex-col">
          <Grid currentBoard={currentBoard} />
        </div>

        <Keyboard
          setCurrentBoard={setCurrentBoard}
          currentBoard={currentBoard}
        />

        <Modal
          isShow={showModal}
          title="Cómo jugar"
          handleClose={setShowModal}
        />
      </div>
    </div>
  );
}

export default App;
