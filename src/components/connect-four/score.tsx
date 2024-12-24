import Image from 'next/image';
import { players, Players } from './currentScore';

export default function Score({ player }: { player: Players }) {
  return (
    <div className='pt-8 relative flex flex-col justify-center items-center bg-CFWhite w-[140px] h-[160px] rounded-3xl border-CFBlack border-[3px] shadow-CFDefault'>
      <p className='cursor-default select-none uppercase font-space-grove-bold whitespace-pre text-CFxs'>{`${players[player].name} wins`}</p>

      <h1 className='cursor-default select-none font-space-grove-bold text-CFl'>
        {players[player].wins}
      </h1>

      <Image
        className='cursor-default select-none absolute left-1/2 -translate-x-1/2 -top-8'
        src={players[player].icon}
        alt='playerIcon'
      />
    </div>
  );
}
