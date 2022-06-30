import { ChartBarIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import Toggle from "../toggle";
const Navbar = ({ showModal, isDarkMode, handleDarkMode }) => {
  return (
    <div className="navbar px-7 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
      <div className="navbar-content">
        <QuestionMarkCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={(e) => {
            e.stopPropagation();
            showModal({ type: "help", show: true });
          }}
        />
        <h1 className="text-3xl ml-2.5 font-semibold tracking-widest dark:text-white">
          WORDLE
        </h1>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={(e) => {
              e.stopPropagation();
              showModal({ type: "stats", show: true });
            }}
          />
          <Toggle
            flag={isDarkMode}
            handleFlag={handleDarkMode}
            className="cursor-pointer dark:stroke-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
