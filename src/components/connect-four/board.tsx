import whiteBoardLarge from '@/app/images/connect-four/board-layer-white-large.svg';
import blackBoardLarge from '@/app/images/connect-four/board-layer-black-large.svg';
import redCounter from '@/app/images/connect-four/counter-red-large.svg';
import yellowCounter from '@/app/images/connect-four/counter-yellow-large.svg';
import Image from 'next/image';
import CurrentScore, { Player, Players } from './currentScore';
import Winner from './winner';

export default function Board({
  state,
  addCounter,
  currentPlayer,
}: {
  state: number[][];
  addCounter: ({ row, col }: { row: number; col: number }) => void;
  currentPlayer: Player | undefined;
}) {
  return (
    <div className='cursor-pointer w-[632px] h-[585px] relative flex'>
      {state.map((_data, index) => {
        const left = 8 + 88 * index;
        return (
          <div
            style={{ top: `0px`, left: `${left}px` }}
            className='absolute flex flex-col w-[88px] h-full z-50'
            onClick={() => {
              let row;

              for (let i = _data.length - 1; i > -1; --i) {
                if (_data[i] !== 0) continue;
                row = i;
                break;
              }
              if (row !== undefined) addCounter({ row, col: index });
            }}
            key={index}
          ></div>
        );
      })}
      {state.map((row, rowIndex) => {
        return row.map((counter, counterIndex) => {
          const left = 18 + 88 * rowIndex;
          const top = 18 + 88 * counterIndex;
          if (counter === 0) return null;
          return (
            <Image
              key={`${rowIndex}-${counterIndex}`}
              src={counter === 1 ? redCounter : yellowCounter}
              alt='counter'
              style={{ top: `${top}px`, left: `${left}px` }}
              className={`h-[75px] absolute animate-travel-test z-30`}
            />
          );
        });
      })}
      <Image priority={true} className='absolute z-40' src={whiteBoardLarge} alt='white' />
      <Image priority={true} className='absolute z-20' src={blackBoardLarge} alt='black' />
      <div>
        {true ? (
          <CurrentScore player={currentPlayer?.code ?? Players.one} time='14s' />
        ) : (
          <Winner player={Players.one} />
        )}
      </div>
    </div>
  );
}
