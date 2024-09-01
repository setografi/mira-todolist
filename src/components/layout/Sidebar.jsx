import React from "react";
import { List, Award, User, CircleHelp } from "lucide-react";

function Sidebar({ setActiveSection }) {
  return (
    <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg mb:mr-4 mb-4 md:mb-0">
      <nav>
        <ul className="flex flex-row md:flex-col justify-center gap-6 md:gap-4">
          <li>
            <button
              onClick={() => setActiveSection("tasks")}
              className="flex items-center font-roboto"
            >
              <List className="mr-2" />
              <span className="hidden md:block">Tasks</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("achievements")}
              className="flex items-center font-roboto"
            >
              <Award className="mr-2" />
              <span className="hidden md:block">Achievements</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className="flex items-center font-roboto"
            >
              <User className="mr-2" />
              <span className="hidden md:block">Profile</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("about")}
              className="flex items-center font-roboto"
            >
              <CircleHelp className="mr-2" />
              <span className="hidden md:block">About</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
