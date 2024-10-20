import { BetType } from '../BetsPanel/types';

export const ROULETTE_TABLE_NUMBERS = [
  {
    number: 1,
    color: 'red',
  },
  {
    number: 2,
    color: 'black',
  },
  {
    number: 3,
    color: 'red',
  },
  {
    number: 4,
    color: 'black',
  },
  {
    number: 5,
    color: 'red',
  },
  {
    number: 6,
    color: 'black',
  },
  {
    number: 7,
    color: 'red',
  },
  {
    number: 8,
    color: 'black',
  },
  {
    number: 9,
    color: 'red',
  },
  {
    number: 10,
    color: 'black',
  },
  {
    number: 11,
    color: 'black',
  },
  {
    number: 12,
    color: 'red',
  },
  {
    number: 13,
    color: 'black',
  },
  {
    number: 14,
    color: 'red',
  },
  {
    number: 15,
    color: 'black',
  },
  {
    number: 16,
    color: 'red',
  },
  {
    number: 17,
    color: 'black',
  },
  {
    number: 18,
    color: 'red',
  },
  {
    number: 19,
    color: 'red',
  },
  {
    number: 20,
    color: 'black',
  },
  {
    number: 21,
    color: 'red',
  },
  {
    number: 22,
    color: 'black',
  },
  {
    number: 23,
    color: 'red',
  },
  {
    number: 24,
    color: 'black',
  },
  {
    number: 25,
    color: 'red',
  },
  {
    number: 26,
    color: 'black',
  },
  {
    number: 27,
    color: 'red',
  },
  {
    number: 28,
    color: 'black',
  },
  {
    number: 29,
    color: 'black',
  },
  {
    number: 30,
    color: 'red',
  },
  {
    number: 31,
    color: 'black',
  },
  {
    number: 32,
    color: 'red',
  },
  {
    number: 33,
    color: 'black',
  },
  {
    number: 34,
    color: 'red',
  },
  {
    number: 35,
    color: 'black',
  },
  {
    number: 36,
    color: 'red',
  },
];

export const BETS = [
  {
    value: 50,
    background: BetType.Bet50,
  },
  {
    value: 100,
    background: BetType.Bet100,
  },
  {
    value: 200,
    background: BetType.Bet200,
  },
  {
    value: 400,
    background: BetType.Bet400,
  },
  {
    value: 800,
    background: BetType.Bet800,
  },
];

export type Id = 'balance' | 'winBet' | 'currentBet' | 'activeNumber';

export interface Item {
  id: Id;
  title: string;
  icon: string;
}

export const INFO_PANEL_ITEMS: Item[] = [
  {
    id: 'balance',
    title: 'Balance',
    icon: '',
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: '',
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: '',
  },
  {
    id: 'activeNumber',
    title: 'Bet Number',
    icon: '',
  },
];
