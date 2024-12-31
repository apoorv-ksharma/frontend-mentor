import Image from 'next/image';
import redTurn from '@/app/images/connect-four/turn-background-red.svg';
import yellowTurn from '@/app/images/connect-four/turn-background-yellow.svg';
import redIcon from '@/app/images/connect-four/player-one.svg';
import yellowIcon from '@/app/images/connect-four/player-two.svg';

export type Player = {
  code: Players;
  turn: string;
  wins: number;
  name: string;
  icon: string;
  value: number;
};

export enum Players {
  one = 'one',
  two = 'two',
}

export const players = new Map<Players, Player>([
  [
    Players.one,
    {
      code: Players.one,
      turn: redTurn,
      wins: 0,
      name: 'Player 1',
      icon: redIcon,
      value: 1,
    },
  ],
  [
    Players.two,
    {
      code: Players.two,
      turn: yellowTurn,
      wins: 0,
      name: 'Player 2',
      icon: yellowIcon,
      value: -1,
    },
  ],
]);

export default function CurrentScore({ player, time }: { player: Players; time: string }) {
  return (
    <div className='cursor-pointer select-none absolute -bottom-[125px] left-1/2 -translate-x-1/2 z-50'>
      <div className='relative'>
        <Image
          priority={true}
          className=''
          src={players.get(player)?.turn ?? ''}
          alt='LargePointer'
        />
        <span className='absolute top-[40px] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center'>
          <p className='uppercase font-space-grove-bold whitespace-pre text-CFxs'>
            {`${players.get(player)?.name}'s turn`}
          </p>

          <h1 className='font-space-grove-bold text-CFl'>{time}</h1>
        </span>
      </div>
    </div>
  );
}
