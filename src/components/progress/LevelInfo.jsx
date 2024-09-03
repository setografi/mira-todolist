import React from "react";

function LevelInfo({ level, xp, xpPerLevel }) {
  return (
    <>
      <p className="font-roboto text-base font-medium">Level: {level}</p>
      <p className="font-roboto text-dark-gray text-xs font-light">
        XP: {xp} / {xpPerLevel}
      </p>
    </>
  );
}

export default LevelInfo;
