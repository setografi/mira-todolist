import React, { useState } from "react";
import { List, Award, User, CircleHelp, X, Menu } from "lucide-react";

function Sidebar({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 fixed top-4 right-4 z-20 bg-primary text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={`fixed md:relative top-[8.25rem] md:top-0 left-0 w-full md:w-1/5 bg-white md:bg-primary p-[30px] rounded-b-lg md:rounded-lg mb:mr-4 shadow-md z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <nav>
          <ul className="flex flex-col justify-center gap-8 md:gap-4">
            <li>
              <button
                onClick={() => setActiveSection("tasks")}
                className="flex items-center text-black md:text-white font-roboto"
              >
                <List className="mr-2" />
                <span className="">Tasks</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("achievements")}
                className="flex items-center text-black md:text-white font-roboto"
              >
                <Award className="mr-2" />
                <span className="">Achievements</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("profile")}
                className="flex items-center text-black md:text-white font-roboto"
              >
                <User className="mr-2" />
                <span className="">Profile</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className="flex items-center text-black md:text-white font-roboto"
              >
                <CircleHelp className="mr-2" />
                <span className="">About</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
