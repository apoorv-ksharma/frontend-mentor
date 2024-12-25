'use client';

import Board from '@/components/connect-four/board';
import Button, { ButtonColourScheme } from '@/components/connect-four/button';
import Card from '@/components/connect-four/card';
import { Players } from '@/components/connect-four/currentScore';
import Score from '@/components/connect-four/score';
import { useRef } from 'react';

export default function Game() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div className='w-1/2 h-full z-10 flex flex-col gap-4 items-center justify-center'>
        <div
          onClick={() => {
            if (dialogRef?.current) dialogRef.current.showModal();
          }}
        >
          Menu
        </div>
        <div className='flex gap-12 items-center'>
          <Score player={Players.one} />
          <Board />
          <Score player={Players.two} />
        </div>
      </div>
      <dialog ref={dialogRef} className='p-4 bg-transparent'>
        <Card>
          <h1 className='cursor-default select-none font-space-grove-bold text-CFl py-4 text-CFWhite uppercase'>
            pause
          </h1>
          <div className='flex w-full gap-6 flex-col'>
            <Button
              colourScheme={ButtonColourScheme.standard}
              text='continue'
              onClickfunc={() => {
                if (dialogRef?.current) dialogRef.current.close();
              }}
              centerText={true}
            ></Button>
            <Button
              colourScheme={ButtonColourScheme.standard}
              text='restart'
              centerText={true}
            ></Button>
            <Button
              colourScheme={ButtonColourScheme.alert}
              text='quit game'
              centerText={true}
              link='/connect-four'
            ></Button>
          </div>
        </Card>
      </dialog>
    </>
  );
}
