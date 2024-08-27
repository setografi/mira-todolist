export function calculateNewXpAndLevel(currentXp, currentLevel) {
  const newXp = currentXp + 1;
  let newLevel = currentLevel;

  if (newXp >= currentLevel * 100) {
    newLevel = currentLevel + 1;
  }

  return { newXp, newLevel };
}
