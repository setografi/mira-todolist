import React from "react";

function LevelInfo({ level, xp, xpPerLevel }) {
  return (
    <>
      <p className="font-roboto">Level: {level}</p>
      <p className="font-roboto">
        XP: {xp} / {xpPerLevel}
      </p>
    </>
  );
}

export default LevelInfo;
