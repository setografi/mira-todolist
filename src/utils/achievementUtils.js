import { ACHIEVEMENTS, categoryAchievements } from "../hooks/constants";

export function checkAchievements(level, xp, tasks, isOverview = false) {
  const unlockedAchievements = [];

  // Check achievements based on level and XP
  ACHIEVEMENTS.forEach(({ level: achLevel, xp: achXp, achievement }) => {
    if (
      level >= achLevel &&
      (!achXp.required || (achXp.required && xp >= achXp.value))
    ) {
      unlockedAchievements.push(achievement);
    }
  });

  // Check achievements based on task categories
  if (!isOverview) {
    tasks.forEach(({ category }) => {
      if (categoryAchievements[category]) {
        unlockedAchievements.push(categoryAchievements[category]);
      }
    });
  }

  return unlockedAchievements.length > 0
    ? {
        message: `You've unlocked new achievements!`,
        achievements: unlockedAchievements,
      }
    : null;
}
