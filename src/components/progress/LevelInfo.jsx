import React from "react";

function LevelInfo({ level, xp }) {
  return (
    <>
      <p className="font-roboto">Level: {level}</p>
      <p className="font-roboto">
        XP: {xp} / {level * 100}
      </p>
    </>
  );
}

export default LevelInfo;
