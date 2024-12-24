import whiteBoardLarge from '@/app/images/connect-four/board-layer-white-large.svg';
import blackBoardLarge from '@/app/images/connect-four/board-layer-black-large.svg';
import Image from 'next/image';
import CurrentScore, { Players } from './currentScore';
import Winner from './winner';

export default function Board() {
  return (
    <div className='cursor-pointer w-[632px] h-[585px] relative flex'>
      <Image className='absolute z-40' src={whiteBoardLarge} alt='white' />
      <Image className='absolute z-20' src={blackBoardLarge} alt='black' />
      {true ? <CurrentScore player={Players.two} time='14s' /> : <Winner player={Players.one} />}
    </div>
  );
}
