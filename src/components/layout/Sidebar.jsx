import React from "react";
import { List, Award, User } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 rounded-lg mr-4">
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="mb-2">
            <a href="#" className="flex items-center font-roboto">
              <List className="mr-2" />{" "}
              <span className="hidden md:block">Tasks</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center font-roboto">
              <Award className="mr-2" />{" "}
              <span className="hidden md:block">Achievements</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center font-roboto">
              <User className="mr-2" />{" "}
              <span className="hidden md:block">Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
