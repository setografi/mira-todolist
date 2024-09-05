import React from "react";

function Footer() {
  return (
    <footer className="w-full p-[30px] bg-primary text-white py-4 mt-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">MIRA</h3>
          <p className="text-sm">Motivational Interactive Reward Assistant</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right mb-4 md:mb-0">
          <ul className="flex flex-row space-x-4">
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="text-sm">
            &copy; 2024 setografi | MIRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
