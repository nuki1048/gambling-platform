import React from 'react';
import useSound from 'use-sound';
import soundBet from '../../../../assets/sounds/roulette/bet.mp3';
// eslint-disable-next-line react-refresh/only-export-components
export enum BetType {
  Bet50 = 'bg-bet-bg-50',
  Bet100 = 'bg-bet-bg-100',
  Bet200 = 'bg-bet-bg-200',
  Bet400 = 'bg-bet-bg-400',
  Bet800 = 'bg-bet-bg-800',
}

interface Props {
  background: BetType;
  bet: number;
  onPickBet: (value: number) => void;
}

const Bet: React.FC<Props> = ({ background, bet, onPickBet }) => {
  const [play] = useSound(soundBet);

  return (
    <button
      onClick={() => {
        play();
        onPickBet(bet);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onPickBet(-bet);
        play();
      }}
      className={`w-[45px] h-[45px] bg-no-repeat bg-center	cursor-pointer rounded-full hover:scale-[1.05] transition-all bg-bet-bg-100	${background}`}
      data-bet-value={bet}
    />
  );
};

export default Bet;
