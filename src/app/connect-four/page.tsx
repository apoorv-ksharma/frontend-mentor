import Button, { ButtonColourScheme, ButtonIconTypes } from '@/components/connect-four/button';
import Card from '@/components/connect-four/card';
import icon from '@/app/images/connect-four/logo.svg';
import Image from 'next/image';

export default function ConnectFour() {
  return (
    <div className='w-full h-full bg-CFDarkPurple'>
      <div className='h-full flex justify-center items-center'>
        <Card>
          <Image className='m-10' src={icon} alt='mainIcon' />
          <div className='flex w-full gap-6 flex-col'>
            <Button
              colourScheme={ButtonColourScheme.highlighted}
              text='play vs player'
              icon={ButtonIconTypes.players}
              link='connect-four/game'
            ></Button>
            <Button colourScheme={ButtonColourScheme.standard} text='game rules'></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
