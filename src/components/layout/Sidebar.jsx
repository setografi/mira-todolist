import React from "react";
import { List, Award, User, CircleHelp } from "lucide-react";

function Sidebar({ setActiveSection }) {
  return (
    <aside className="fixed md:relative bottom-0 left-0 w-full md:w-1/5 bg-primary p-4 md:p-[30px] rounded-t-lg md:rounded-lg mb:mr-4 shadow-md z-10">
      <nav>
        <ul className="flex flex-row md:flex-col justify-center gap-8 md:gap-4">
          <li>
            <button
              onClick={() => setActiveSection("tasks")}
              className="flex items-center text-white font-roboto"
            >
              <List className="mr-2" />
              <span className="hidden lg:block">Tasks</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("achievements")}
              className="flex items-center text-white font-roboto"
            >
              <Award className="mr-2" />
              <span className="hidden lg:block">Achievements</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className="flex items-center text-white font-roboto"
            >
              <User className="mr-2" />
              <span className="hidden lg:block">Profile</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("about")}
              className="flex items-center text-white font-roboto"
            >
              <CircleHelp className="mr-2" />
              <span className="hidden lg:block">About</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
