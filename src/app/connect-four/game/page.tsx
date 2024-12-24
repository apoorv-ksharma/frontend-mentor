import Board from '@/components/connect-four/board';
import { Players } from '@/components/connect-four/currentScore';
import Score from '@/components/connect-four/score';

export default function Game() {
  return (
    <div className='w-1/2 h-full z-10 flex items-center justify-center'>
      <div></div>
      <div className='flex gap-12 items-center'>
        <Score player={Players.one} />
        <Board />
        <Score player={Players.two} />
      </div>
    </div>
  );
}
