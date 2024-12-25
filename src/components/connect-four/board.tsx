'use client';

import whiteBoardLarge from '@/app/images/connect-four/board-layer-white-large.svg';
import blackBoardLarge from '@/app/images/connect-four/board-layer-black-large.svg';
import redCounter from '@/app/images/connect-four/counter-red-large.svg';
import yellowCounter from '@/app/images/connect-four/counter-yellow-large.svg';
import Image from 'next/image';
import CurrentScore, { Players } from './currentScore';
import Winner from './winner';
import { useState } from 'react';

export default function Board() {
  const [testState, setState] = useState(false);
  const test = 18 + 88 * 5;
  const test2 = 18 + 88 * 4;
  return (
    <div className='cursor-pointer w-[632px] h-[585px] relative flex'>
      {testState && (
        <>
          <Image
            src={redCounter}
            alt='counter'
            style={{ top: `${test}px`, left: `${test}px` }}
            className={`h-[75px] absolute animate-travel-test z-30`}
          />
          <Image
            src={yellowCounter}
            alt='counter'
            style={{ top: `${test2}px`, left: `${test2}px` }}
            className={`h-[75px] absolute animate-travel-test z-30`}
          />
        </>
      )}
      <Image className='absolute z-40' src={whiteBoardLarge} alt='white' />
      <Image className='absolute z-20' src={blackBoardLarge} alt='black' />
      <div onClick={() => setState((p) => !p)}>
        {true ? <CurrentScore player={Players.two} time='14s' /> : <Winner player={Players.one} />}
      </div>
    </div>
  );
}
