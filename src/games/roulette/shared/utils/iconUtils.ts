import bet50 from '@/assets/roulette/bet-50.png';
import bet100 from '@/assets/roulette/bet-100.png';
import bet200 from '@/assets/roulette/bet-200.png';
import bet400 from '@/assets/roulette/bet-400.png';
import bet800 from '@/assets/roulette/bet-800.png';

export const getIcon = (currentBet: number) => {
  const isMoreThan50 = currentBet >= 50;
  const isMoreThan100 = currentBet >= 100;
  const isMoreThan200 = currentBet >= 200;
  const isMoreThan400 = currentBet >= 400;
  const isMoreThan800 = currentBet >= 800;

  if (isMoreThan800) return bet800;
  if (isMoreThan400) return bet400;
  if (isMoreThan200) return bet200;
  if (isMoreThan100) return bet100;
  if (isMoreThan50) return bet50;
  return null;
};
