/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bet-bg-50': "url('/src/assets/roulette/bet-50.png')",
        'bet-bg-100': "url('/src/assets/roulette/bet-100.png')",
        'bet-bg-200': "url('/src/assets/roulette/bet-200.png')",
        'bet-bg-400': "url('/src/assets/roulette/bet-400.png')",
        'bet-bg-800': "url('/src/assets/roulette/bet-800.png')",
        'bets-panel': "url('/src/assets/roulette/bg-bets.png')",
        roulette: "url('/src/assets/roulette/bg-main.png')",
        greenSector: "url('/src/assets/roulette/greenSectorIcon.svg')",
        slots: "url('/src/assets/slots/main-bg.png')",
        'slots-bets': "url('/src/assets/slots/betIcon.png')",
        'slots-event-panel': "url('/src/assets/slots/rectangle-frame.png')",
        'roulette-score-window': "url('/src/assets/roulette/info-bets-bg.svg')",
      },
      boxShadow: {
        roulette: '0px 0px 11px 23px #561C08',
      },
    },
  },
  plugins: [],
};
