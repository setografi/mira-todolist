export function calculateNewXpAndLevel(currentXp, currentLevel) {
  const xpPerLevel = Math.floor(100 * Math.pow(1.5, currentLevel - 1));
  const newXp = currentXp + 1;
  let newLevel = currentLevel;

  if (newXp >= xpPerLevel) {
    newLevel = currentLevel + 1;
  }

  return { newXp, newLevel, xpPerLevel };
}
