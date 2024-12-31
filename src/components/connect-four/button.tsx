import playerIcon from '@/app/images/connect-four/player-vs-player.svg';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export enum ButtonColourScheme {
  standard = 'standard',
  highlighted = 'highlighted',
  alert = 'alert',
}

export enum ButtonIconTypes {
  players = 'players',
}

export default function Button({
  colourScheme,
  text,
  icon,
  link,
  onClickfunc,
  centerText,
}: {
  colourScheme: ButtonColourScheme;
  text: string;
  icon?: ButtonIconTypes;
  link?: string;
  onClickfunc?: MouseEventHandler<HTMLButtonElement>;
  centerText?: boolean;
}) {
  const colourSchemes = {
    standard: {
      bg: 'bg-CFWhite',
    },
    highlighted: {
      bg: 'bg-CFYellow',
    },
    alert: {
      bg: 'bg-CFPink',
    },
  };

  const icons = {
    players: {
      image: playerIcon,
      alt: 'player vs player',
    },
  };
  if (link) {
    return (
      <Link
        href={link}
        prefetch={true}
        className={`w-full flex select-none ${
          centerText ? 'justify-center' : 'justify-between'
        } items-center min-h-[72px] p-[12px] ${
          colourSchemes[colourScheme].bg
        } border-CFBlack rounded-3xl border-[3px] shadow-CFDefault hover:shadow-CFHover hover:border-CFDarkPurple`}
      >
        <p className='font-space-grove-bold text-2xl uppercase text-left'>{text ?? ' '}</p>
        {icon && <Image src={icons[icon].image} alt={icons[icon].alt} />}
      </Link>
    );
  }
  return (
    <button
      onClick={onClickfunc}
      className={`w-full flex select-none outline-none ${
        centerText ? 'justify-center' : 'justify-between'
      } items-center min-h-[72px] p-[12px] ${
        colourSchemes[colourScheme].bg
      } border-CFBlack rounded-3xl border-[3px] shadow-CFDefault hover:shadow-CFHover hover:border-CFDarkPurple`}
    >
      <p className='font-space-grove-bold text-2xl uppercase text-left'>{text ?? ' '}</p>
      {icon && <Image src={icons[icon].image} alt={icons[icon].alt} />}
    </button>
  );
}
