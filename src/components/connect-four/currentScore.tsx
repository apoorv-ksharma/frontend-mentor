import Image from 'next/image';
import redTurn from '@/app/images/connect-four/turn-background-red.svg';
import yellowTurn from '@/app/images/connect-four/turn-background-yellow.svg';
import redIcon from '@/app/images/connect-four/player-one.svg';
import yellowIcon from '@/app/images/connect-four/player-two.svg';
import cpuIcon from '@/app/images/connect-four/cpu.svg';

export enum Players {
  one = 'one',
  two = 'two',
}

export const players = {
  one: {
    turn: redTurn,
    wins: 0,
    name: 'Player 1',
    icon: redIcon,
  },
  two: {
    turn: yellowTurn,
    wins: 0,
    name: 'Player 2',
    icon: yellowIcon,
  },
  you: {
    turn: redTurn,
    wins: 0,
    name: 'you',
    icon: redIcon,
  },
  cpu: {
    turn: yellowTurn,
    wins: 0,
    name: 'cpu',
    icon: cpuIcon,
  },
};

export default function CurrentScore({ player, time }: { player: Players; time: string }) {
  return (
    <div className='cursor-pointer select-none absolute -bottom-[125px] left-1/2 -translate-x-1/2 z-50'>
      <div className='relative'>
        <Image className='' src={players[player].turn} alt='redLargePointer' />
        <span className='absolute top-[40px] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center'>
          <p className='uppercase font-space-grove-bold whitespace-pre text-CFxs'>
            {`${players[player].name}'s turn`}
          </p>

          <h1 className='font-space-grove-bold text-CFl'>{time}</h1>
        </span>
      </div>
    </div>
  );
}
