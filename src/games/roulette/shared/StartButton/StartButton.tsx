interface StartButtonProps {
  handleClick: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='w-[175px] h-[53px] mx-auto rounded-[60px] bg-[linear-gradient(90deg,_#DFB55A_0.02%,_#E4BF6E_16.02%,_#F1E29E_28.01%,_#E4C074_46.01%,_#F7F0AC_59.01%,_#DBC27D_77.01%,_#E7D393_100%)] border-[3px] border-[#147229] text-[#147229] font-bold text-lg flex justify-center items-center text-3xl'
    >
      Start
    </button>
  );
};
