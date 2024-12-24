import playerIcon from '@/app/images/connect-four/player-vs-player.svg';
import Image from 'next/image';
import Link from 'next/link';

export enum ButtonColourScheme {
  standard = 'standard',
  highlighted = 'highlighted',
}

export enum ButtonIconTypes {
  players = 'players',
}

export default function Button({
  colourScheme,
  text,
  icon,
  link,
}: {
  colourScheme: ButtonColourScheme;
  text: string;
  icon?: ButtonIconTypes;
  link?: string;
}) {
  const colourSchemes = {
    standard: {
      bg: 'bg-CFWhite',
    },
    highlighted: {
      bg: 'bg-CFYellow',
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
        className={`w-full flex justify-between items-center min-h-[72px] p-[12px] ${colourSchemes[colourScheme].bg} border-CFBlack rounded-3xl border-[3px] shadow-CFDefault hover:shadow-CFHover hover:border-CFDarkPurple`}
      >
        <p className='font-space-grove-bold text-2xl uppercase text-left'>{text ?? ' '}</p>
        {icon && <Image src={icons[icon].image} alt={icons[icon].alt} />}
      </Link>
    );
  }
  return (
    <button
      className={`w-full flex justify-between items-center min-h-[72px] p-[12px] ${colourSchemes[colourScheme].bg} border-CFBlack rounded-3xl border-[3px] shadow-CFDefault hover:shadow-CFHover hover:border-CFDarkPurple`}
    >
      <p className='font-space-grove-bold text-2xl uppercase text-left'>{text ?? ' '}</p>
      {icon && <Image src={icons[icon].image} alt={icons[icon].alt} />}
    </button>
  );
}
