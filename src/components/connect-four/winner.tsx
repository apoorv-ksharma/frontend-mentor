import { players, Players } from './currentScore';

export default function Winner({ player }: { player: Players }) {
  return (
    <div className='absolute bg-CFWhite flex flex-col items-center justify-center w-[285px] h-[150px] left-1/2 -translate-x-1/2 bottom-[-110px] z-50 rounded-3xl border-CFBlack border-[3px] shadow-CFDefault'>
      <p className='cursor-default select-none uppercase font-space-grove-bold whitespace-pre text-CFxs'>{`${players[player].name} wins`}</p>

      <h1 className='cursor-default select-none font-space-grove-bold text-CFl'>Wins</h1>

      <button className='py-2 px-4 rounded-full bg-CFDarkPurple hover:bg-CFPink text-CFWhite uppercase font-space-grove-bold whitespace-pre text-CFxs'>
        play again
      </button>
    </div>
  );
}
