'use client';

import Board from '@/components/connect-four/board';
import Button, { ButtonColourScheme } from '@/components/connect-four/button';
import Card from '@/components/connect-four/card';
import { players, Players } from '@/components/connect-four/currentScore';
import Score from '@/components/connect-four/score';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import icon from '@/app/images/connect-four/logo.svg';
import Image from 'next/image';

const initialState = () => new Array(7).fill(0).map(() => new Array(6).fill(0).map(() => 0));

export default function Game() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentPlayer, setCurrentPlayer] = useState(players.get(Players.one));
  const [gameState, setGameState] = useState<number[][]>(initialState());

  const isGameWon = useCallback(() => {
    const copy = JSON.parse(JSON.stringify(gameState));
    outer: for (let i = 0; i < copy.length; ++i) {
      inner: for (let j = 0; j < copy[i].length; ++j) {
        if (copy[i][j] !== 0) {
          console.log(`${i}-${j}`, copy[i][j]);
        }
      }
    }
  }, [gameState]);

  useEffect(() => {
    isGameWon();
  }, [isGameWon]);

  const addCounter = useCallback(
    ({ col, row }: { col: number; row: number }) => {
      setGameState((prev) => [
        ...prev.map((colArray, index) => {
          if (index === col) {
            colArray[row] = currentPlayer?.value ?? 0;
          }
          return colArray;
        }),
      ]);

      if (currentPlayer?.value === 1) {
        setCurrentPlayer(players.get(Players.two));
      } else {
        setCurrentPlayer(players.get(Players.one));
      }
    },
    [currentPlayer?.value]
  );

  const router = useRouter();
  return (
    <>
      <div className='h-full z-10 flex flex-col gap-10 items-center justify-start pt-10'>
        <div className='w-full flex flex-row justify-between items-center px-48'>
          <div className='w-40'>
            <p
              onClick={() => {
                if (dialogRef?.current) dialogRef.current.showModal();
              }}
              className='cursor-pointer select-none hover:bg-CFPink w-fit font-space-grove-medium bg-CFDarkPurple px-4 py-2 rounded-full text-CFWhite text-CFxs uppercase'
            >
              menu
            </p>
          </div>
          <Image priority={true} src={icon} alt='logo' />
          <div
            onClick={() => {
              setGameState(initialState());
              setCurrentPlayer(players.get(Players.one));
            }}
            className='w-40 flex justify-end'
          >
            <p className='cursor-pointer select-none hover:bg-CFPink w-fit font-space-grove-medium bg-CFDarkPurple px-4 py-2 rounded-full text-CFWhite text-CFxs uppercase'>
              restart
            </p>
          </div>
        </div>
        <div className='flex gap-12 items-center'>
          <Score player={Players.one} />
          <Board state={gameState} addCounter={addCounter} currentPlayer={currentPlayer} />
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
              onClickfunc={() => {
                setGameState(initialState());
                setCurrentPlayer(players.get(Players.one));

                if (dialogRef?.current) dialogRef.current.close();
              }}
              centerText={true}
            ></Button>
            <Button
              colourScheme={ButtonColourScheme.alert}
              text='quit game'
              centerText={true}
              onClickfunc={() => {
                router.replace('/connect-four');
              }}
            ></Button>
          </div>
        </Card>
      </dialog>
    </>
  );
}
