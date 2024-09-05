import React from "react";
import { ACHIEVEMENTS, categoryAchievements } from "../../hooks/constants";

function Achievements({ level, xp, tasks }) {
  const unlockedAchievements = [];

  // Cek achievements berdasarkan level dan XP
  ACHIEVEMENTS.forEach(({ level: achLevel, xp: achXp, achievement }) => {
    if (
      level >= achLevel &&
      (!achXp.required || (achXp.required && xp >= achXp.value))
    ) {
      unlockedAchievements.push(achievement);
    }
  });

  // Cek achievements berdasarkan kategori tugas
  tasks.forEach(({ category }) => {
    if (categoryAchievements[category]) {
      unlockedAchievements.push(categoryAchievements[category]);
    }
  });

  return (
    <section className="w-full p-[30px] rounded-lg shadow-md">
      <h2 className="text-2xl font-futura-medium mb-4">Achievements</h2>
      <ul className="list-disc ml-5 font-roboto">
        {unlockedAchievements.length > 0 ? (
          unlockedAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))
        ) : (
          <li>Belum ada achievement yang diperoleh.</li>
        )}
      </ul>
    </section>
  );
}

export default Achievements;
