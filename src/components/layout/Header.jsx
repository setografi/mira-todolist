import React from "react";

function Header() {
  return (
    <header className="container mx-auto px-[30px] pt-[40px] pb-4 sticky top-0 bg-white z-20">
      <div className="flex flex-col">
        <p className="text-lg md:text-xl font-futura-bold font-bold">MIRA</p>
        <div className="flex justify-between items-center">
          <h1 className="font-futura-medium text-base pr-10 md:pr-0">
            Motivational Interactive Reward Assistant
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
