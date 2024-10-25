export const getIcon = (currentBet: number) => {
  const isMoreThan50 = currentBet >= 50;
  const isMoreThan100 = currentBet >= 100;
  const isMoreThan200 = currentBet >= 200;
  const isMoreThan400 = currentBet >= 400;
  const isMoreThan800 = currentBet >= 800;

  if (isMoreThan800) return '/assets/roulette/bet-800.png';
  if (isMoreThan400) return '/assets/roulette/bet-400.png';
  if (isMoreThan200) return '/assets/roulette/bet-200.png';
  if (isMoreThan100) return '/assets/roulette/bet-100.png';
  if (isMoreThan50) return '/assets/roulette/bet-50.png';
  return null;
};
