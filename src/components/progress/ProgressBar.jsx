import React from "react";

function ProgressBar({ xp, level }) {
  const progress = (xp / (level * 100)) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-cream">
      <div
        className="bg-dark-gray h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
